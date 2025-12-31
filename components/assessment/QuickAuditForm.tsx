'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card } from '@/components/ui/Card';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

interface FormData {
  name: string;
  phone: string;
  current_position: string;
  years_experience: string;
  service_needed: string;
  existing_cv_link: string;
  linkedin_profile: string;
  main_goal: string;
  urgency: string;
}

export function QuickAuditForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    current_position: '',
    years_experience: '',
    service_needed: '',
    existing_cv_link: '',
    linkedin_profile: '',
    main_goal: '',
    urgency: '',
  });

  const totalSteps = 3;

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'שם הוא שדה חובה';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'טלפון הוא שדה חובה';
      } else if (!/^0[2-9]\d{7,8}$/.test(formData.phone.replace(/-/g, ''))) {
        newErrors.phone = 'מספר טלפון לא תקין';
      }
    }

    if (step === 2) {
      if (!formData.current_position.trim()) {
        newErrors.current_position = 'תפקיד נוכחי הוא שדה חובה';
      }
      if (!formData.service_needed) {
        newErrors.service_needed = 'מה צריך הוא שדה חובה';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Get UTM parameters from URL
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        referrer: document.referrer || '',
        landing_page: window.location.pathname,
      };

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'quick_audit',
          ...utmParams,
        }),
      });

      if (response.ok) {
        // Track event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'quick_audit_submit', {
            event_category: 'form',
            event_label: 'Quick Audit Form',
          });
        }

        router.push('/thank-you?type=quick_audit');
      } else {
        const data = await response.json();
        setErrors({ submit: data.error || 'שגיאה בשליחת הטופס. נסו שוב.' });
      }
    } catch (error) {
      setErrors({ submit: 'שגיאה בשליחת הטופס. נסו שוב מאוחר יותר.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <Card className="max-w-2xl mx-auto p-6 md:p-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-body text-text-medium">שלב {currentStep} מתוך {totalSteps}</span>
          <span className="text-sm font-body text-text-medium">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-accent-sky h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: פרטים אישיים */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                פרטים אישיים
              </h2>
              <p className="text-base text-text-medium font-body mb-6">
                רק כדי שאדע איך לחזור אליך, ושהמענה יגיע למקום הנכון.
              </p>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
                שם מלא *
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                className={errors.name ? 'border-red-500' : ''}
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">
                טלפון *
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="050-1234567"
                className={errors.phone ? 'border-red-500' : ''}
                required
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="flex justify-end">
              <Button type="button" onClick={handleNext} variant="primary">
                הבא
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: פרטים מקצועיים */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                פרטים מקצועיים
              </h2>
              <p className="text-base text-text-medium font-body mb-6">
                כדי להבין את הרקע המקצועי שלך ולהתאים את הבדיקה — בלי לנחש.
              </p>
            </div>

            <div>
              <label htmlFor="current_position" className="block text-sm font-medium text-text-dark mb-2">
                תפקיד נוכחי / אחרון *
              </label>
              <Input
                id="current_position"
                type="text"
                value={formData.current_position}
                onChange={(e) => updateField('current_position', e.target.value)}
                placeholder="למשל: מפתח תוכנה, מנהל שיווק, רואה חשבון"
                className={errors.current_position ? 'border-red-500' : ''}
                required
              />
              {errors.current_position && (
                <p className="text-red-500 text-sm mt-1">{errors.current_position}</p>
              )}
            </div>

            <div>
              <label htmlFor="years_experience" className="block text-sm font-medium text-text-dark mb-2">
                שנות ניסיון
              </label>
              <select
                id="years_experience"
                value={formData.years_experience}
                onChange={(e) => updateField('years_experience', e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-accent-sky bg-white"
              >
                <option value="">בחרו אפשרות</option>
                <option value="0-2">0-2 שנים</option>
                <option value="3-5">3-5 שנים</option>
                <option value="6-10">6-10 שנים</option>
                <option value="10+">מעל 10 שנים</option>
              </select>
            </div>

            <div>
              <label htmlFor="service_needed" className="block text-sm font-medium text-text-dark mb-2">
                מה צריך לבדוק? *
              </label>
              <select
                id="service_needed"
                value={formData.service_needed}
                onChange={(e) => updateField('service_needed', e.target.value)}
                className={`w-full px-4 py-2 rounded-lg border-2 ${
                  errors.service_needed ? 'border-red-500' : 'border-accent-sky'
                } bg-white`}
                required
              >
                <option value="">בחרו אפשרות</option>
                <option value="cv_writing">קורות חיים</option>
                <option value="linkedin">פרופיל לינקדאין</option>
                <option value="both">קורות חיים + לינקדאין</option>
                <option value="interview_prep">הכנה לראיונות</option>
                <option value="career_consulting">ייעוץ קריירה כללי</option>
              </select>
              {errors.service_needed && (
                <p className="text-red-500 text-sm mt-1">{errors.service_needed}</p>
              )}
            </div>

            <div>
              <label htmlFor="existing_cv_link" className="block text-sm font-medium text-text-dark mb-2">
                קישור לקורות חיים קיימים (אופציונלי)
              </label>
              <Input
                id="existing_cv_link"
                type="url"
                value={formData.existing_cv_link}
                onChange={(e) => updateField('existing_cv_link', e.target.value)}
                placeholder="https://drive.google.com/... או קישור אחר"
              />
            </div>

            <div>
              <label htmlFor="linkedin_profile" className="block text-sm font-medium text-text-dark mb-2">
                קישור לפרופיל לינקדאין (אופציונלי)
              </label>
              <Input
                id="linkedin_profile"
                type="url"
                value={formData.linkedin_profile}
                onChange={(e) => updateField('linkedin_profile', e.target.value)}
                placeholder="https://linkedin.com/in/..."
              />
            </div>

            <div className="flex justify-between">
              <Button type="button" onClick={handleBack} variant="secondary">
                חזרה
              </Button>
              <Button type="button" onClick={handleNext} variant="primary">
                הבא
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: יעד ודחיפות */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                יעד ודחיפות
              </h2>
              <p className="text-base text-text-medium font-body mb-6">
                כדי לכוון את הבדיקה למה שחשוב לך: יותר פניות ממגייסים, מעבר לראיונות, או שיפור כללי.
              </p>
            </div>

            <div>
              <label htmlFor="main_goal" className="block text-sm font-medium text-text-dark mb-2">
                מה היעד העיקרי שלך?
              </label>
              <select
                id="main_goal"
                value={formData.main_goal}
                onChange={(e) => updateField('main_goal', e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-accent-sky bg-white"
              >
                <option value="">בחרו אפשרות</option>
                <option value="more_calls">יותר שיחות טלפון ממגייסים</option>
                <option value="more_interviews">יותר ראיונות עבודה</option>
                <option value="better_at_matching">שיפור התאמה למשרות</option>
                <option value="career_change">שינוי קריירה</option>
                <option value="general_improvement">שיפור כללי בקורות החיים/לינקדאין</option>
              </select>
            </div>

            <div>
              <label htmlFor="urgency" className="block text-sm font-medium text-text-dark mb-2">
                כמה דחוף? (אופציונלי)
              </label>
              <select
                id="urgency"
                value={formData.urgency}
                onChange={(e) => updateField('urgency', e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-accent-sky bg-white"
              >
                <option value="">בחרו אפשרות</option>
                <option value="very_urgent">מאוד דחוף - יש לי ראיון בקרוב</option>
                <option value="urgent">דחוף - אני מחפש פעיל</option>
                <option value="moderate">בינוני - מתחיל לחפש</option>
                <option value="not_urgent">לא דחוף - רק רוצה לשפר</option>
              </select>
            </div>

            {errors.submit && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{errors.submit}</p>
              </div>
            )}

            <div className="flex justify-between">
              <Button type="button" onClick={handleBack} variant="secondary">
                חזרה
              </Button>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <LoadingSpinner className="mr-2" />
                    שולח...
                  </>
                ) : (
                  'שלחו לבדיקה'
                )}
              </Button>
            </div>
          </div>
        )}
      </form>
    </Card>
  );
}

