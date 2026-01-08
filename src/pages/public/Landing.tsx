import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, MessageSquare, Users, Bell, TrendingUp, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useBrandConfig } from "@/contexts/BrandConfigContext";
import { motion } from "framer-motion";
import { 
  MotionWrapper, 
  StaggerContainer, 
  StaggerItem,
  fadeInUp 
} from "@/components/MotionWrapper";

const LandingMaksu = () => {
  const navigate = useNavigate();
  const brandConfig = useBrandConfig();
  
  const brandNS = `brand-${brandConfig.brand_key}`;
  const { t } = useTranslation([brandNS]);
  const lt = (key: string) => t(`${brandNS}:landing.${key}`);

  const features = [
    {
      icon: Users,
      title: lt("features.crmAgnostic.title"),
      description: lt("features.crmAgnostic.description"),
    },
    {
      icon: Bell,
      title: lt("features.psychology.title"),
      description: lt("features.psychology.description"),
    },
    {
      icon: MessageSquare,
      title: lt("features.channels.title"),
      description: lt("features.channels.description"),
    },
    {
      icon: Clock,
      title: lt("features.noSubscription.title"),
      description: lt("features.noSubscription.description"),
    },
    {
      icon: TrendingUp,
      title: lt("features.workflows.title"),
      description: lt("features.workflows.description"),
    },
    {
      icon: CheckCircle2,
      title: lt("features.beforeCollection.title"),
      description: lt("features.beforeCollection.description"),
    },
  ];

  const steps = [
    {
      number: "1",
      title: lt("howItWorks.step1.title"),
      description: lt("howItWorks.step1.description"),
    },
    {
      number: "2",
      title: lt("howItWorks.step2.title"),
      description: lt("howItWorks.step2.description"),
    },
    {
      number: "3",
      title: lt("howItWorks.step3.title"),
      description: lt("howItWorks.step3.description"),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[480px] sm:h-[520px] md:h-[600px] overflow-hidden">
        <img
          src="/images/hero.png"
          alt={lt("heroAlt")}
          className="absolute inset-0 w-full h-full object-cover object-center md:object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 md:from-black/40 md:via-black/20 md:to-transparent" />

        <div className="relative z-10 h-full flex">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl pt-24 sm:pt-32 md:pt-56">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold text-white max-w-2xl mb-3 sm:mb-4 leading-tight"
            >
              {lt("heroTitle")}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl mb-6 sm:mb-8"
            >
              {lt("heroSubtitle")}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto" onClick={() => navigate("/auth")}>
                {lt("heroPrimaryCta")}
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
                onClick={() =>
                  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {lt("heroSecondaryCta")}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Visual Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 bg-background">
        <div className="container mx-auto max-w-6xl grid gap-8 sm:gap-12 md:grid-cols-2 items-center">
          <MotionWrapper animation="fadeInLeft" className="flex justify-center order-2 md:order-1">
            <img
              src="/images/how_it_works.png"
              alt={lt("paymentVisual.alt")}
              className="w-full max-w-xs sm:max-w-md h-auto drop-shadow-xl"
            />
          </MotionWrapper>
          <MotionWrapper animation="fadeInRight" className="order-1 md:order-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
              {lt("paymentVisual.title")}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              {lt("paymentVisual.subtitle")}
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground text-left">
              <li className="flex gap-2">
                <span>•</span>
                <span>{lt("paymentVisual.point1")}</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>{lt("paymentVisual.point2")}</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>{lt("paymentVisual.point3")}</span>
              </li>
            </ul>
          </MotionWrapper>
        </div>
      </section>

      {/* Psychology Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl grid gap-6 sm:gap-8 md:grid-cols-[1.5fr,1fr] items-center">
          <MotionWrapper animation="fadeInUp" className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
              {lt("psychologySection.title")}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              {lt("psychologySection.body")}
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground text-left">
              <li className="flex gap-2">
                <span>•</span>
                <span>{lt("psychologySection.point1")}</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>{lt("psychologySection.point2")}</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>{lt("psychologySection.point3")}</span>
              </li>
            </ul>
          </MotionWrapper>
          <MotionWrapper animation="scaleIn">
            <Card className="shadow-sm">
              <CardContent className="p-4 sm:pt-6">
                <h4 className="text-base sm:text-lg font-semibold mb-2 text-foreground">
                  {lt("psychologySection.statTitle")}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  {lt("psychologySection.statText")}
                </p>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">{lt("psychologySection.statBaseline")}</span>
                    <span className="font-medium whitespace-nowrap">~40 %</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">{lt("psychologySection.statSingleReminder")}</span>
                    <span className="font-medium whitespace-nowrap">~75 %</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">{lt("psychologySection.statMultiChannel")}</span>
                    <span className="font-semibold text-primary whitespace-nowrap">~90 %</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>
      </section>

      {/* Commitment Issues Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 bg-background">
        <div className="container mx-auto max-w-6xl grid gap-8 sm:gap-10 md:grid-cols-2 items-center">
          <MotionWrapper animation="fadeInLeft" className="text-center md:text-left order-2 md:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-foreground">
              {lt("commitmentSection.title")}
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              {lt("commitmentSection.subtitle")}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3">
              {lt("commitmentSection.body1")}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              {lt("commitmentSection.body2")}
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 text-left">
              <li className="flex gap-2">
                <span>•</span>
                <span>{lt("commitmentSection.point1")}</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>{lt("commitmentSection.point2")}</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>{lt("commitmentSection.point3")}</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="w-full sm:w-auto" onClick={() => navigate("/auth")}>
                {lt("commitmentSection.primaryCta")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                {lt("commitmentSection.secondaryCta")}
              </Button>
            </div>
          </MotionWrapper>
          <MotionWrapper animation="fadeInRight" className="flex justify-center order-1 md:order-2">
            <div className="relative max-w-xs sm:max-w-sm">
              <img
                src="/images/commitment_issues.png"
                alt={lt("commitmentSection.imageAlt")}
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 bg-muted/40">
        <div className="container mx-auto max-w-6xl">
          <MotionWrapper animation="fadeInUp" className="text-center mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {lt("features.title")}
            </h3>
          </MotionWrapper>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4 sm:pt-6">
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-primary" />
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-10 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <MotionWrapper animation="fadeInUp" className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {lt("howItWorks.title")}
            </h3>
          </MotionWrapper>

          <StaggerContainer className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={index} className="text-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-3 sm:mb-4"
                >
                  {step.number}
                </motion.div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">
                  {step.title}
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {step.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 bg-primary text-primary-foreground">
        <MotionWrapper animation="fadeInUp" className="container mx-auto max-w-3xl text-center space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold">
              {lt("cta.title")}
            </h3>
            <p className="text-base sm:text-lg opacity-90">
              {lt("cta.subtitle")}
            </p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex justify-center"
          >
            <img
              src="/images/mobile_mockup.png"
              alt={lt("cta.imageAlt") || "Mobile preview"}
              className="max-w-[200px] sm:max-w-xs w-full h-auto drop-shadow-2xl"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto" onClick={() => navigate("/auth")}>
              {lt("startFreeTrial")}
            </Button>
          </motion.div>
        </MotionWrapper>
      </section>

      {/* Disclaimer */}
      <MotionWrapper 
        animation="fadeInUp" 
        as="section"
        className="py-8 sm:py-12 px-4 sm:px-6 bg-muted/30"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg p-4 sm:p-6">
            <h4 className="font-semibold mb-2 text-sm sm:text-base text-amber-900 dark:text-amber-200">
              {lt("disclaimer.title")}
            </h4>
            <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300">
              {lt("disclaimer.text")}
            </p>
          </div>
        </div>
      </MotionWrapper>
    </>
  );
};

export default LandingMaksu;
