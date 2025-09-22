import portugalFlag from '@/assets/services-bg.jpg';

const SectionBanner = ({ title, subtitle }: any) => {
    return (
        <section
            className="relative bg-gradient-to-br from-primary/90 to-primary/70 py-24 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${portugalFlag})` }}
        >
            <div className="absolute inset-0 bg-primary/60"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center text-white max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        {title}
                    </h1>
                    <p className="text-xl text-white/90 leading-relaxed">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    )
}
export default SectionBanner
