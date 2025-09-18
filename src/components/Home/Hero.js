function Hero(){
    return(
        <section className="hero">
            <h2>Code. Learn. Share.</h2>
            <p>
                Full-stack blog application with authentication, CRUD operations, 
                and modern React features.
            </p>
            <div className="hero-stats">
                <StatItem number="42" label="Total Posts"/>
                <StatItem number="156" label="Users" />
                <StatItem number="1.2k" label="Comments" />
            </div>
        </section>
    )
}
function StatItem({ number, label }) {
    return(
        <div className="stat-item">
            <span className="stat-number">{number}</span>
            <span className="stat-label">{label}</span>
        </div>
    )
}
export default Hero;