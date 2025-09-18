function AboutContent (){
    const blogPost = {
        author: "Fatih Kayacı",
        tags: ["#react", "#javascript", "#webdev"],
        title: "React Öğrenmeye Başladım",
        content: "React öğrenmek sandığımdan daha kolay çıktı..."
    };
    return(
        <div className="container">
            <section className="about-content">

                <div className="profile-card">
                    <div className="profile-avatar">
                        <span className="author-name">{blogPost.author}</span>
                    </div>
                    <h2 className="profile-name">Fatih KAYACI</h2>
                    <p className="profile-title">Full-Stack Developer</p>
                    <p className="profile-bio">
                        Passionate about creating elegant solutions to complex problems. 
                        Always learning, always building.
                    </p>
                    <div className="profile-stats">
                        <div className="profile-stat">
                            <span class="profile-stat-number">42</span>
                            <span class="profile-stat-label">Posts</span>
                        </div>
                    </div>
                </div>

                <div className="about-text"></div>
            </section>
        </div>
    )
}
export default AboutContent;