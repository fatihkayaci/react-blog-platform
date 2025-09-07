import BlogList from './BlogList';
import SideBar from './SideBar';

function BlogSection() {
    return(
        <div className="container">
            <h2 className="section-title">Latest Posts</h2>
            
            <div className="main-content">
                <BlogList/>
                <SideBar/>
            </div>
        </div>
    )    
}

export default BlogSection;