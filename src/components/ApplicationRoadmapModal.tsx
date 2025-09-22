import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLanguage } from '@/hooks/useLanguage';
import { CheckCircle, ChevronLeft, ChevronRight, Home, Plane } from 'lucide-react';
import React, { useState } from 'react';
import JourneyToPortugal from './JourneyToPortugal';

interface ApplicationRoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationRoadmapModal = ({ isOpen, onClose }: ApplicationRoadmapModalProps) => {
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const roadmapData = {
    title: {
      az: "Müraciət Xəritəsi",
      en: "Application Roadmap",
      ru: "Дорожная Карта Заявления"
    },
    navigation: {
      next: {
        az: "Növbəti",
        en: "Next",
        ru: "Далее"
      },
      previous: {
        az: "Əvvəlki",
        en: "Previous",
        ru: "Назад"
      },
      close: {
        az: "Bağla",
        en: "Close",
        ru: "Закрыть"
      },
      apply: {
        az: "Müraciət Et",
        en: "Apply Now",
        ru: "Подать Заявку"
      },
      step: {
        az: "Addım",
        en: "Step",
        ru: "Этап"
      },
      of: {
        az: "/",
        en: " of ",
        ru: " из "
      }
    },
    stages: [
      {
        icon: CheckCircle,
        phase: {
          az: "I Mərhələ – Sənədlərin Hazırlanması",
          en: "Stage I – Document Preparation",
          ru: "Этап I – Подготовка Документов"
        },
        description: {
          az: "Viza üçün ilkin sənədlərin toplanması və maliyyə əsaslı uyğunluğun yoxlanması:",
          en: "Initial document collection and financial eligibility check:",
          ru: "Сбор первичных документов для визы и проверка финансового соответствия:"
        },
        requirements: {
          az: [
            "Məhkumluq haqqında arayış (apostilli)",
            "Passiv gəlir sübutları (icarə, bank depoziti, pensiya və s.)",
            "Bank hesabında minimum 15,000 avro vəsaitin sübutu",
            "Şengen zonasına uyğun tibbi sığorta (min. 30,000 avro əhatə)"
          ],
          en: [
            "Criminal record certificate with apostille",
            "Proof of passive income (rental, deposit, pension, etc.)",
            "Bank statement confirming at least €15,000 available funds",
            "Schengen-compliant health insurance (min. €30,000 coverage)"
          ],
          ru: [
            "Справка о несудимости с апостилем",
            "Подтверждение пассивного дохода (аренда, депозит, пенсия и т.д.)",
            "Выписка из банка, подтверждающая наличие минимум €15,000",
            "Медицинская страховка, соответствующая требованиям Шенгена (мин. €30,000 покрытие)"
          ]
        }
      },
      {
        icon: Plane,
        phase: {
          az: "II Mərhələ – Səfərə Hazırlıq və Rəsmi Ərizə",
          en: "Stage II – Travel Preparation and Visa Submission",
          ru: "Этап II – Подготовка к Поездке и Подача Визы"
        },
        description: {
          az: "Səfər planlaması və viza müraciətinin hüquqi baxımdan təqdim olunması:",
          en: "Travel preparation and visa submission:",
          ru: "Планирование поездки и юридическая подача заявления на визу:"
        },
        requirements: {
          az: [
            "Aviabiletin bir tərəfli və elastik bron edilməsi",
            "Konsulluq və AIMA görüşlərinin təyinatı",
            "Bütün sənədlərin tərcümə, notariat və tələblərə uyğun hazırlanması",
            "CommuniQ tərəfindən tam hüquqi müşayiət"
          ],
          en: [
            "Booking of one-way, flexible flight to Portugal",
            "Appointment scheduling with embassy and AIMA",
            "Full document preparation (translation, notary, compliance)",
            "Legal accompaniment by CommuniQ at every step"
          ],
          ru: [
            "Бронирование односторонних гибких авиабилетов в Португалию",
            "Запись на встречи в посольстве и AIMA",
            "Полная подготовка документов (перевод, нотариус, соответствие)",
            "Юридическое сопровождение CommuniQ на каждом этапе"
          ]
        }
      },
      {
        icon: Home,
        phase: {
          az: "III Mərhələ – Portuqaliyada Qəbul və İnkişaf",
          en: "Stage III – Integration and Development in Portugal",
          ru: "Этап III – Интеграция и Развитие в Португалии"
        },
        description: {
          az: "Portuqaliyaya uyğunlaşma və yaşayış prosesinin dəstəklənməsi:",
          en: "Integration and ongoing support in Portugal:",
          ru: "Интеграция и постоянная поддержка в Португалии:"
        },
        requirements: {
          az: [
            "Təhsil: məktəb və universitetə yerləşdirilmə",
            "Əmlak: kirayə və ya alqı-satqı üzrə dəstək",
            "Sığorta: fərdi və ailəlik tibbi sığortalar",
            "Tibb: həkimlər və klinikalar üzrə yönləndirmə",
            "Vergi və hüquq: yerli ekspertlərlə əməkdaşlıq",
            "Bank: hesab açılması, KYC, təmsilçi dəyişimi",
            "Ünvan: qeydiyyat ünvanının təqdim edilməsi",
            "NIF və sosial sığorta nömrəsinin alınması",
            "24/7 konsultasiya və sənəd dəstəyi"
          ],
          en: [
            "Education: placement in private/public schools",
            "Property: rental or purchase assistance",
            "Insurance: health insurance via trusted brokers",
            "Healthcare: access to doctors and clinics",
            "Tax & Legal: connection to expert advisors",
            "Banking: account opening, KYC, representation",
            "Address: legal registered address for residency",
            "NIF & Social Security Number issuance",
            "24/7 support & continuous document help"
          ],
          ru: [
            "Образование: устройство в частные/государственные школы",
            "Недвижимость: помощь с арендой или покупкой",
            "Страхование: медицинская страховка через доверенных брокеров",
            "Здравоохранение: доступ к врачам и клиникам",
            "Налоги и Право: связь с экспертными консультантами",
            "Банковские услуги: открытие счета, KYC, представительство",
            "Адрес: юридический зарегистрированный адрес для резидентства",
            "Получение NIF и номера социального страхования",
            "24/7 поддержка и постоянная помощь с документами"
          ]
        }
      }
    ]
  };

  const totalSteps = roadmapData.stages.length;
  const currentStage = roadmapData.stages[currentStep];

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto bg-background border border-border">
        <DialogHeader className="pb-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-portugal-gold rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 600 400" className="w-6 h-4">
                  <rect width="600" height="400" fill="transparent" />
                  <rect width="240" height="400" fill="#DA020E" />
                  <rect x="240" width="360" height="400" fill="#046A38" />
                  <circle cx="240" cy="200" r="50" fill="#FFE900" stroke="#046A38" strokeWidth="3" />
                </svg>
              </div>
              {roadmapData.title[language] || roadmapData.title['en']}
            </DialogTitle>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="text-sm text-muted-foreground">
              {roadmapData.navigation.step[language] || roadmapData.navigation.step['en']} {currentStep + 1}{roadmapData.navigation.of[language] || roadmapData.navigation.of['en']}{totalSteps}
            </span>
            <div className="flex gap-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${index === currentStep
                    ? 'bg-gradient-to-r from-primary to-portugal-gold'
                    : index < currentStep
                      ? 'bg-portugal-gold/50'
                      : 'bg-border'
                    }`}
                />
              ))}
            </div>
          </div>
        </DialogHeader>

        {/* Animated Journey Map */}
        <div className="mb-6">
          {/* <AnimatedJourneyMap currentStep={currentStep} language={language as 'az' | 'en'} /> */}
          <JourneyToPortugal />
        </div>

        {/* Current Step Content */}
        <div className="min-h-[400px] flex items-center">
          <Card className="w-full border border-border bg-card hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-portugal-gold rounded-full flex items-center justify-center shadow-lg">
                    {React.createElement(currentStage.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    {currentStage.phase[language] || currentStage.phase['en']}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {currentStage.description[language] || currentStage.description['en']}
                  </p>
                   <div className="grid gap-4">
                     {(currentStage.requirements[language] || currentStage.requirements['en'] || []).map((requirement, reqIndex) => (
                      <div key={reqIndex} className="flex items-start gap-4 p-3 bg-background/50 rounded-lg border border-border/50">
                        <div className="w-3 h-3 bg-portugal-gold rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                        <p className="text-foreground leading-relaxed">
                          {requirement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            {roadmapData.navigation.previous[language] || roadmapData.navigation.previous['en']}
          </Button>

          <div className="flex gap-3">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-portugal-gold hover:from-primary/90 hover:to-portugal-gold/90 text-white font-semibold px-6"
              onClick={() => window.location.href = '/contact'}
            >
              {roadmapData.navigation.apply[language] || roadmapData.navigation.apply['en']}
            </Button>

            {currentStep < totalSteps - 1 ? (
              <Button
                size="lg"
                onClick={handleNext}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6"
              >
                {roadmapData.navigation.next[language] || roadmapData.navigation.next['en']}
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                size="lg"
                variant="outline"
                onClick={handleClose}
                className="border-primary text-primary hover:bg-primary/10 px-6"
              >
                {roadmapData.navigation.close[language] || roadmapData.navigation.close['en']}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationRoadmapModal;
