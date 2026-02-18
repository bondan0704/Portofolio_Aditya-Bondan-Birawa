import { Badge } from "@/components/ui/badge";
import { prefixPath } from "@/utils/paths";

const AboutMe = () => {
  const servicesBedge = ["Graphic Design", "User Experience", "Mobile App Design", "Brand Identity", "Responsive Design", "Prototyping", "Illustration", "Motion Graphics", "Print Design", "UI Development", "Interactive Media"];
  return (
    <section>
      <div className="container">
        <div
          className="border-x border-primary/10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${prefixPath('/images/about-me/about-me-bg.svg')}')` }}
        >
          <div className="flex flex-col gap-9 sm:gap-11 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About Me</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">Saya Aditya Bondan Birawa, lulusan Sistem Informasi</h2>
              <h5 className="text-secondary font-normal">
                Memiliki fokus pada UI/UX Design, Frontend Development, dan Graphic Design. Memiliki pengalaman sebagai UI/UX Designer di Seven.Inc dan Graphic Designer di Learning With Us, serta pengalaman Frontend Developer (ReactJS)
                melalui Program MBKM di Hacktiv8. Terbiasa bekerja secara terstruktur, kolaboratif, dan berorientasi pada kebutuhan pengguna serta tujuan bisnis.
              </h5>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">Services</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {servicesBedge?.map((value, index) => {
                  return (
                    <Badge variant={"outline"} key={index} className="py-1.5 px-3 rounded-lg">
                      <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                    </Badge>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
