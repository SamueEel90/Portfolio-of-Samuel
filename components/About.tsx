import Image from 'next/image';

const About = () => {
  return (
    <div className="text-secondary text-l mt-25 max-w-xl ml-4 mr-4 md:mr-20 leading-relaxed">
      Som vedúci oddelenia v spoločnosti <strong className="hover:text-theme-blue text-primary cursor-pointer transition-colors duration-200">Kaufland</strong> s predchádzajúcimi skúsenosťami ako shift leader v McDonald’s.
      Mojím cieľom je stať sa{' '}
      <strong className="hover:text-theme-blue text-primary cursor-pointer transition-colors duration-200">programátorom</strong> — programovaniu sa venujem denne a neustále sa zlepšujem.
      Som{' '}
      <strong className="hover:text-theme-blue text-primary cursor-pointer transition-colors duration-200">tímový</strong> hráč, viedol som viacero menších tímov, viem{' '}
      <strong className="hover:text-theme-blue text-primary cursor-pointer transition-colors duration-200">analyticky</strong> myslieť, rychlo sa učím.
      <br />
      Zároveň kladiem veľký dôraz na zdravý a aktívny životný štýl — venujem sa behu, horskej cyklistike a motorsportu.
      <br />
      <br />
      Pracujem s:
      <br />
      <span className="font-semibold">Programovacie jazyky:</span>{' '}
      <span className="text-primary">JavaScript, TypeScript, C#</span>
      <br />
      <span className="font-semibold">Databázy:</span>{' '}
      <span className="text-primary">MongoDB, PostgreSQL, SQL Server</span>
      <br />
      <span className="font-semibold">Frameworky a knižnice:</span>{' '}
      <span className="text-primary">React, React Native, Next.js, Redux</span>
      <br />
      Momentalne Pracujem na projekte:{' '}
      <strong className="hover:text-theme-blue text-primary cursor-pointer transition-colors duration-200">Attend Flow</strong>
     <div className="flex gap-2 mt-10">
  <div className="group relative w-1/2 rounded-xl overflow-hidden">
    <Image
      src="/images/Profilovka.jpg"
      alt="Profilovka 1"
      fill
      className="w-full h-full object-cover transition duration-500 group-hover:scale-125"
      sizes="(max-width: 768px) 100vw, 50vw"
      style={{ objectFit: 'cover' }}
    />
    <div className="absolute inset-0 bg-theme-blue/30 backdrop-brightness-90 transition duration-500 group-hover:bg-transparent" />
  </div>

  <div className="group relative w-1/2 rounded-xl overflow-hidden">
    <Image
      src="/images/profilovka2.jpg"
      alt="Profilovka 2"
      fill
      className="w-full h-full object-cover transition duration-500 group-hover:scale-150"
      sizes="(max-width: 768px) 100vw, 50vw"
      style={{ objectFit: 'cover' }}
    />
    <div className="absolute inset-0 bg-theme-blue/30 backdrop-brightness-90 transition duration-500 group-hover:bg-transparent" />
  </div>
</div>

    </div>
  );
};

export default About;
