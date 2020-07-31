export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Dongeun Paeng
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <div style={{ textAlign: "right" }}>
          <div>안녕하세요, 팽동은입니다.</div>
          <div>문득 드는 생각들이 사라지는 게 아쉬워서</div>
          <div>옳은 생각과 그른 생각 모두 남겨봅니다 :)</div>
        </div>
      </h4>
    </section>
  );
}
