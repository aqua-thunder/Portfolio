const AnimatedSection = ({
    children,
    className = '',
    delay = 0,
    animation = 'fade-up'
}) => {
    return (
        <section
            data-aos={animation}
            data-aos-delay={delay}
            className={className}
        > 
            {children}
        </section>
    )
}

export default AnimatedSection
