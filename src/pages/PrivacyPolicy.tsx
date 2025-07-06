import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, UserCheck, Mail, Clock, Eye } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Helmet>
        <title>سياسة الخصوصية - التجوال</title>
        <meta
          name="description"
          content="تعرف على سياسة الخصوصية لشركة التجوال. نحن ملتزمون بحماية بياناتك الشخصية ونوضح كيفية جمع واستخدام وحماية معلوماتك."
        />
        <meta
          name="keywords"
          content="سياسة الخصوصية, التجوال, حماية البيانات, خصوصية المستخدم, بيانات شخصية, عين التجوال"
        />
        <meta property="og:title" content="سياسة الخصوصية - التجوال" />
        <meta
          property="og:description"
          content="نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. تعرف على كيفية تعاملنا مع معلوماتك."
        />
        <meta
          property="og:image"
          content="/lovable-uploads/c7ecb791-6f0b-49db-baf0-2f7610d5a376.webp"
        />
        <meta property="og:url" content="https://al-tijwal.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="سياسة الخصوصية - التجوال" />
        <meta
          name="twitter:description"
          content="نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. تعرف على كيفية تعاملنا مع معلوماتك."
        />
        <meta
          name="twitter:image"
          content="/lovable-uploads/c7ecb791-6f0b-49db-baf0-2f7610d5a376.webp"
        />
        <link rel="canonical" href="https://al-tijwal.com/privacy-policy" />
      </Helmet>
      <div className="container mx-auto mt-12 px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">سياسة الخصوصية</h1>
          <p className="text-lg text-muted-foreground">
            نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              آخر تحديث
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">6 يوليو 2025</p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">مقدمة</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              شركة التجوال ("نحن" أو "الشركة") تقدر خصوصية عملائها وزوار
              موقعها الإلكتروني. توضح سياسة الخصوصية هذه كيفية جمع واستخدام
              وحماية المعلومات الشخصية التي نحصل عليها منك.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <UserCheck className="w-6 h-6" />
              البيانات التي نجمعها
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  المعلومات الشخصية
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
                  <li>الاسم الكامل</li>
                  <li>عنوان البريد الإلكتروني</li>
                  <li>رقم الهاتف</li>
                  <li>اسم الشركة والمسمى الوظيفي</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  المعلومات التقنية (عبر الموقع)
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
                  <li>عنوان IP</li>
                  <li>نوع المتصفح ونظام التشغيل</li>
                  <li>الصفحات التي تزورها على موقعنا</li>
                  <li>وقت وتاريخ ومدة الزيارة</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6" />
              بيانات عين التجوال (Tijwal Eye)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              تستخدم خدمتنا تقنية "عين التجوال"، وهي نظام ذكاء اصطناعي يحلل
              تفاعل الجمهور مع الإعلانات. نؤكد أن هذا النظام لا يسجل أو يخزن
              أي صور أو فيديوهات للوجوه يمكن التعرف عليها.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li>
                <strong>البيانات المجمعة:</strong> يحسب النظام عدد المشاهدين
                ومدة مشاهدتهم بشكل إحصائي ومجهول الهوية تمامًا.
              </li>
              <li>
                <strong>الغرض من الاستخدام:</strong> تستخدم هذه البيانات
                الإحصائية فقط لتزويد عملائنا بتقارير مجمعة عن أداء حملاتهم،
                مما يساعدهم على قياس فعالية إعلاناتهم.
              </li>
              <li>
                <strong>خصوصية البيانات:</strong> جميع البيانات التي تجمعها
                "عين التجوال" هي بيانات إحصائية مجهولة المصدر ولا يمكن
                استخدامها لتحديد هوية أي فرد.
              </li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              كيفية استخدام البيانات
            </h2>
            <p className="text-muted-foreground mb-4">
              نستخدم المعلومات التي نجمعها للأغراض التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li>تقديم وتحسين خدماتنا</li>
              <li>الرد على استفساراتك وطلباتك</li>
              <li>إرسال التحديثات والعروض الترويجية (بموافقتك)</li>
              <li>تحليل استخدام الموقع لتحسين تجربة المستخدم</li>
              <li>الامتثال للمتطلبات القانونية وحماية حقوقنا</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6" />
              حماية البيانات
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              نتخذ إجراءات أمنية صارمة لحماية بياناتك الشخصية من الوصول غير
              المصرح به أو الاستخدام أو الإفصاح، بما في ذلك التشفير والوصول
              المقيد.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">مشاركة البيانات</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              لن نبيع أو نؤجر معلوماتك الشخصية. قد نشارك بياناتك مع مقدمي
              الخدمات الموثوق بهم لمساعدتنا في تشغيل أعمالنا، أو عند الضرورة
              للامتثال للقانون.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">حقوقك</h2>
            <p className="text-muted-foreground mb-4">
              لديك الحق في الوصول إلى بياناتك الشخصية، طلب تصحيحها أو حذفها،
              والاعتراض على معالجتها.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              ملفات تعريف الارتباط (Cookies)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك
              التحكم فيها من خلال إعدادات متصفحك.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              التغييرات على هذه السياسة
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي
              تغييرات جوهرية عن طريق نشر السياسة الجديدة على هذه الصفحة.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Mail className="w-6 h-6" />
              اتصل بنا
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى الاتصال بنا:
            </p>
            <div className="bg-muted/30 rounded-lg p-6 space-y-2">
              <p className="font-medium">التجوال</p>
              <p className="text-muted-foreground">
                البريد الإلكتروني: contact@al-tijwal.com
              </p>
              <p className="text-muted-foreground">الهاتف: 07849567837</p>
              <p className="text-muted-foreground">
                العنوان: بغداد - المنصور
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}''