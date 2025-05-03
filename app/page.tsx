import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft, Headphones, ImageIcon, Newspaper, Play, Volume2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"
import { AppMockup } from "@/components/app-mockup"
import { SectionPattern } from "@/components/section-pattern"
import { FeatureCard } from "@/components/feature-card"
import { TeamCard } from "@/components/team-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TechStackCarousel } from "@/components/tech-stack-carousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#DAD5D2]">
      {/* Header - Fixed at the top */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/images/logo-red.png" alt="الخيمة" width={40} height={40} className="h-10 w-auto" />
            <Image src="/images/text-logo-red.png" alt="الخيمة" width={120} height={40} className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-8 font-ibm-plex text-[#323334]">
            <Link href="#about" className="hover:text-[#C13144] transition-colors">
              عن التطبيق
            </Link>
            <Link href="#features" className="hover:text-[#C13144] transition-colors">
              الميزات
            </Link>
            <Link href="#team" className="hover:text-[#C13144] transition-colors">
              فريق العمل
            </Link>
            <Link href="#contact" className="hover:text-[#C13144] transition-colors">
             تواصل معنا
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="bg-[#C13144] hover:bg-[#a52a3a] text-white hidden md:flex">جربه الآن</Button>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-[72px]">
        <main>
          {/* Hero Section */}
          <section className="relative py-0 overflow-hidden bg-[#323334] text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <Image src="/images/new-banner.jpg" alt="خلفية الخيمة" fill className="object-cover" />
            </div>

            <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 space-y-6 text-right">
                  <ScrollReveal>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-ibm-plex">مرحبا بك في الخيمة</h1>
                  </ScrollReveal>
                  <ScrollReveal delay={200}>
                    <p className="text-xl md:text-2xl">تطبيق صوتي ذكي يعرض الأخبار المهمة بصوت ولهجة قريبة ومريحة.</p>
                  </ScrollReveal>
                  <ScrollReveal delay={400}>
                    <p className="text-lg">
                      على كثرة الأخبار الي حولنا، إلا إن الوصول للمعلومة اللي تهمك صار متعب. الكل ينشر، والكل يعلّق، بس
                      ما فيه أحد يقدّم لك الزبدة بشكل واضح ومريح.
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={600}>
                    <div className="flex gap-4">
                      <Button className="bg-[#C13144] hover:bg-[#a52a3a] text-white text-lg px-8 py-6 group">
                        <span>حمل التطبيق وجرب</span>
                        <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-125" />
                      </Button>
                    </div>
                  </ScrollReveal>
                </div>
                <div className="md:w-1/2 relative">
                  <ScrollReveal direction="left">
                    <div className="relative h-[500px] w-full flex items-center justify-center">
                      <div className="absolute w-64 h-64 rounded-full bg-[#C13144]/20 animate-pulse"></div>
                      <AppMockup imageUrl="/images/app-screenshot-7.png" alt="تطبيق الخيمة" className="w-[250px]" />
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#DAD5D2] to-transparent"></div>
          </section>

          {/* About Section */}
          <SectionPattern variant="primary" id="about">
            <div className="container mx-auto px-4 relative z-10">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold font-ibm-plex text-[#323334] mb-4">عن التطبيق</h2>
                  <div className="relative">
                    <Separator className="w-24 h-1 bg-[#C13144] mx-auto" />
                  </div>
                </div>
              </ScrollReveal>

              <div className="flex flex-col md:flex-row gap-12 items-center">
                <ScrollReveal className="md:w-1/2" direction="right">
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#C13144] rounded-lg"></div>
                    <div className="relative bg-white p-4 rounded-lg shadow-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <AppMockup
                          imageUrl="/images/app-screenshot-4.png"
                          alt="شاشة الأخبار العاجلة"
                          className="w-full max-w-[180px]"
                        />
                        <AppMockup
                          imageUrl="/images/app-screenshot-5.png"
                          alt="شاشة الفئات"
                          className="w-full max-w-[180px]"
                        />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <div className="md:w-1/2 space-y-6">
                  <ScrollReveal>
                    <p className="text-xl text-[#323334] border-r-4 border-[#C13144] pr-4">
                      "الخيمة" هو تطبيق صوتي ذكي يسهل عليك متابعة الأخبار، ويقدم لك محتوى يواكب اهتماماتك بصوت ولهجة
                      قريبة ومريحة.
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={200}>
                    <p className="text-lg text-[#323334]">
                      أول ما تدخل التطبيق، تختار الفئات اللي تهمك - مثل السياسة، الرياضة، الثقافة، أو الأخبار المحلية -
                      ومن بعدها التطبيق يتكفّل بالباقي.
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={400}>
                    <p className="text-lg text-[#323334]">
                      يحلّل، يختصر، ويسجّل لك محتوى يناسب ذوقك، وتقدر تسمعه وقت ما يناسبك بدون ما تضيع وقتك بالفرز أو
                      البحث.
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={600}>
                    <div className="bg-[#323334] text-white p-4 rounded-lg relative overflow-hidden">
                      <div
                        className="absolute top-0 right-0 w-20 h-full opacity-30"
                        style={{
                          backgroundImage: "url('/images/sadu-pattern.png')",
                          backgroundSize: "contain",
                        }}
                      ></div>
                      <p className="relative z-10">
                        "الخيمة" يعطيك خلاصة الأحداث بشكل يومي، بأسلوب يواكب يومك، ويوصل لك المعلومة بدون ما تتعب نفسك.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </SectionPattern>

          {/* Features Section */}
          <SectionPattern variant="dark" id="features">
            <div className="container mx-auto px-4 relative z-10">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold font-ibm-plex mb-4">الميزات</h2>
                  <div className="relative">
                    <Separator className="w-24 h-1 bg-[#C13144] mx-auto" />
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ScrollReveal delay={100}>
                  <FeatureCard
                    icon={Newspaper}
                    title="الذكاء الاصطناعي"
                    description="يستخدم التطبيق تقنية الذكاء الاصطناعي LangChain لتحليل الأخبار وجمعها من مصادر موثوقة."
                  />
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <FeatureCard
                    icon={Headphones}
                    title="محرك تحويل النص إلى كلام"
                    description="نستخدم محرك تحويل النص إلى كلام باللهجة القريبة لتقديم تجربة صوتية سلسة."
                    iconClassName="bg-[#619781]"
                  />
                </ScrollReveal>

                <ScrollReveal delay={500}>
                  <FeatureCard
                    icon={ImageIcon}
                    title="توليد الصور"
                    description="تم تطوير محرك خاص لتوليد صور غلاف فريدة تعكس محتوى الأخبار بدقة."
                  />
                </ScrollReveal>
              </div>

              <ScrollReveal delay={700}>
                <div className="mt-16 text-center">
                  <h3 className="text-2xl font-bold font-ibm-plex mb-6">كيف يعمل؟</h3>
                  <div className="relative">
                    <div className="absolute top-0 left-0 w-full h-full">
                      <div className="w-full h-full flex justify-center">
                        <div className="h-full w-1 bg-gradient-to-b from-transparent via-[#C13144] to-transparent"></div>
                      </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                      <div className="bg-[#3a3b3c] p-6 rounded-lg relative">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#323334] border-4 border-[#C13144] flex items-center justify-center text-2xl font-bold">
                          ١
                        </div>
                        <h4 className="text-xl font-bold mb-4 mt-6 font-ibm-plex">جمع الأخبار</h4>
                        <p>يبدأ بجمع الأخبار من مصادر موثوقة باستخدام تقنية LangChain</p>
                      </div>

                      <div className="bg-[#3a3b3c] p-6 rounded-lg relative">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#323334] border-4 border-[#619781] flex items-center justify-center text-2xl font-bold">
                          ٢
                        </div>
                        <h4 className="text-xl font-bold mb-4 mt-6 font-ibm-plex">تلخيص وصياغة</h4>
                        <p>نلخص المحتوى ونستخرج أهم النقاط ثم نعيد صياغته باللهجة المحببة</p>
                      </div>

                      <div className="bg-[#3a3b3c] p-6 rounded-lg relative">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#323334] border-4 border-[#C13144] flex items-center justify-center text-2xl font-bold">
                          ٣
                        </div>
                        <h4 className="text-xl font-bold mb-4 mt-6 font-ibm-plex">تحويل إلى صوت وصورة</h4>
                        <p>تتحول الأخبار إلى صوت وتُولد صورة فريدة لكل حلقة تعكس موضوعها</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-16 p-6 bg-[#3a3b3c] rounded-lg relative overflow-hidden max-w-3xl mx-auto">
                    <div className="absolute top-0 left-0 w-full h-full opacity-5">
                      <div
                        className="w-full h-full"
                        style={{ backgroundImage: "url('/images/sadu-pattern.png')", backgroundSize: "200px" }}
                      ></div>
                    </div>
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="bg-[#C13144] rounded-full p-3">
                        <Volume2 className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg">
                          النتيجة؟ تجربة صوتية متكاملة متجددة يومياً، وتشتغل لحالها من غير ما تطلبها.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </SectionPattern>

          {/* App Preview Section */}
          <SectionPattern variant="secondary">
            <div className="container mx-auto px-4 relative z-10">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold font-ibm-plex text-[#323334] mb-4">شاهد التطبيق</h2>
                  <div className="relative">
                    <Separator className="w-24 h-1 bg-[#C13144] mx-auto" />
                  </div>
                </div>
              </ScrollReveal>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <ScrollReveal direction="right" delay={200}>
                  <AppMockup imageUrl="/images/app-screenshot-2.png" alt="الصفحة الرئيسية" className="w-[220px]" />
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <AppMockup
                    imageUrl="/images/app-screenshot-1.png"
                    alt="تشغيل الأخبار"
                    className="w-[220px] md:mt-12"
                  />
                </ScrollReveal>

                <ScrollReveal direction="left" delay={600}>
                  <AppMockup imageUrl="/images/app-screenshot-6.png" alt="اختيار الفئات" className="w-[220px]" />
                </ScrollReveal>
              </div>

              <ScrollReveal delay={800}>
                <div className="mt-16 text-center">
                  <p className="text-lg text-[#323334] max-w-2xl mx-auto mb-8">
                    تطبيق الخيمة يقدم تجربة مستخدم سلسة وبسيطة، مع واجهة سهلة الاستخدام تمكنك من الوصول إلى الأخبار
                    المهمة بسرعة وسهولة.
                  </p>
                  <Button className="bg-[#C13144] hover:bg-[#a52a3a] text-white text-lg px-8 py-6">
                    حمل التطبيق وجرب
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </SectionPattern>

          {/* Team Section */}
          <SectionPattern variant="primary" id="team">
            <div className="container mx-auto px-4 relative z-10">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold font-ibm-plex text-[#323334] mb-4">فريق العمل</h2>
                  <div className="relative">
                    <Separator className="w-24 h-1 bg-[#C13144] mx-auto" />
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                <ScrollReveal delay={100}>
                  <TeamCard
                    name="زياد الرويشد"
                    role="مهندس برمجيات Backend"
                    email="ZeadAlrouasheed@gmail.com"
                    phone="0506054839"
                    imageUrl="/images/team-ziyad.png"
                    linkedinUrl="https://www.linkedin.com/in/ziyad-alruwaished-5bb28924a/"
                  />
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <TeamCard
                    name="مسلم الدوسري"
                    role="مهندس برمجيات Frontend"
                    email="swe-musallam@outlook.com"
                    phone="0507674278"
                    imageUrl="/images/team-musallam.png"
                    linkedinUrl="https://www.linkedin.com/in/musallam-aldossari/"
                  />
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <TeamCard
                    name="مشاري العييناء"
                    role="مهندس برمجيات Backend"
                    email="Msharialaeena@outlook.com"
                    phone="0500795776"
                    imageUrl="/images/team-mshari.png"
                    linkedinUrl="https://www.linkedin.com/in/malaeena/"
                  />
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <TeamCard
                    name="فهد البلاع"
                    role="مدير منتجات"
                    email="Fahadballaa@gmail.com"
                    phone="0530992348"
                    imageUrl="/images/team-fahad.png"
                    linkedinUrl="http://linkedin.com/in/fahad-alballaa-6b844b155/"
                  />
                </ScrollReveal>

                <ScrollReveal delay={500}>
                  <TeamCard
                    name="سعود البرخيل"
                    role="محلل بيانات"
                    email="saudalbarkheel@gmail.com"
                    phone="0534413651"
                    imageUrl="/images/team-saud.png"
                    linkedinUrl="https://www.linkedin.com/in/saud-albarkheel-755b10263/"
                  />
                </ScrollReveal>
              </div>
            </div>
          </SectionPattern>

          {/* Tech Stack Section - Moved to after Team Section */}
          <section className="py-16 bg-[#DAD5D2]" id="tech">
            <div className="container mx-auto px-4">
              <ScrollReveal>
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold font-ibm-plex text-[#323334] mb-4">
                    التقنيات المستخدمة
                  </h2>
                  <div className="relative">
                    <Separator className="w-24 h-1 bg-[#C13144] mx-auto" />
                  </div>
                  <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    نستخدم أحدث التقنيات لبناء تطبيق الخيمة وضمان تجربة مستخدم سلسة وفعالة
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <TechStackCarousel />
              </ScrollReveal>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="py-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image src="/images/new-banner.jpg" alt="خلفية الخيمة" fill className="object-cover opacity-70" />
              <div className="absolute inset-0 bg-[#C13144]/70"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold font-ibm-plex mb-6 text-white">وش تحتري؟</h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl max-w-2xl mx-auto mb-8 text-white">
                  لا تفوت الفرصة! جرب الخيمة الآن واحصل على تجربة صوتية متكاملة متجددة يومياً.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <Button className="bg-white text-[#C13144] hover:bg-gray-100 text-lg px-8 py-6 font-bold group">
                  حمل التطبيق وجرب
                  <ChevronLeft className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                    <h3 className="text-xl font-bold font-ibm-plex mb-4 text-white">تحديثات يومية</h3>
                    <p className="text-white/80">احصل على أهم الأخبار بشكل يومي ومستمر</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                    <h3 className="text-xl font-bold font-ibm-plex mb-4 text-white">تجربة صوتية</h3>
                    <p className="text-white/80">استمع للأخبار بلهجة قريبة ومريحة</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                    <h3 className="text-xl font-bold font-ibm-plex mb-4 text-white">صور فريدة</h3>
                    <p className="text-white/80">صور مولدة خصيصاً لكل خبر بتصميم مميز</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="absolute bottom-0 left-0 w-full"></div>
          </section>
        </main>

        <footer className="bg-[#323334] text-white py-12 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#C13144]"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-4 mb-6 md:mb-0">
                <Image src="/images/logo-white.png" alt="الخيمة" width={40} height={40} className="h-10 w-auto" />
                <Image src="/images/text-logo-white.png" alt="الخيمة" width={120} height={40} className="h-8 w-auto" />
              </div>
              <div className="text-center md:text-right">
                <p className="mb-2">© 2025 الخيمة. جميع الحقوق محفوظة.</p>
                <p>info@alkhaimah.app</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-bold font-ibm-plex mb-4">عن التطبيق</h3>
                  <p className="text-gray-400">تطبيق صوتي ذكي يعرض الأخبار المهمة بصوت ولهجة قريبة ومريحة.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold font-ibm-plex mb-4">تقنيات الخيمة</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Go</li>
                    <li>LangChain</li>
                    <li>React Native</li>
                    <li>AWS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold font-ibm-plex mb-4">روابط سريعة</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                        عن التطبيق
                      </Link>
                    </li>
                    <li>
                      <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                        الميزات
                      </Link>
                    </li>
                    <li>
                      <Link href="#team" className="text-gray-400 hover:text-white transition-colors">
                        فريق العمل
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold font-ibm-plex mb-4">تواصل معنا</h3>
                  <p className="text-gray-400">info@alkhaimah.app</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center"></div>
          </div>
        </footer>
      </div>
    </div>
  )
}
