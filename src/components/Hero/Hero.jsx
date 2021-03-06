const Hero = ({
    title,
    subtitle = null,
    strapline = null,
}) => (
    <div className="fd-c-hero__wrapper">
        <div className="fd-c-hero__title">
            <div className="fd-c-hero__gooey"></div>
            <span data-testid="fd-c-hero__subtitle">{subtitle}</span>
            <h1 data-testid="fd-c-hero__title">{title}</h1>
        </div>
        <span className="fd-c-hero__strapline" data-testid="fd-c-hero__strapline">
            {strapline}
        </span>
    </div>
);

export default Hero;
