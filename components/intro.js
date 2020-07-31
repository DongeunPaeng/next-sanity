export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Dongeun Paeng
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <div style={{ textAlign: "right" }}>
          <div>문득문득 드는 생각들</div>
          <div>잊을 만하면 다시 떠올리기 위해서</div>
          <div>공유하기 위해서</div>
        </div>
      </h4>
    </section>
  );
}
