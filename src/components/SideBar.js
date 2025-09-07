function SideBar() {
  const categoryCount = 5;
  return (
    <div className="sidebar-section">
      <h3>📁 Categories</h3>
      
      <ul className="categories-list">
        {Array.from({ length: categoryCount }, (_, index) => (
          <div key={index}>
            <Category categoryName={`Category ${index + 1}`} />
            {index < categoryCount - 1 && <hr />} {/* Son elemandan sonra hr olmasın */}
          </div>
        ))}
      </ul>
    </div>
  );
}
function Category({categoryName}) {
  return (
      <li className="category-item">
        <a href="#">
          <span className="category-name">{categoryName}</span>
          <span className="category-count">12</span>
        </a>
      </li>
  );
}
export default SideBar;