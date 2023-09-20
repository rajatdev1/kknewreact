import React, { useState } from 'react';
 // You'll create this CSS file separately

const TabContent = ({ id, links }) => (
  <div id={id} className="popular_cat_content">
    <ul className="home_kk_popular_list">
      {links.map(link => (
        <li key={link.href}>
          <a target="_blank" href={link.href} title={link.title}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  // This is just for the "Top Exams" tab, repeat for other tabs
  const topExamLinks = [
    { href: 'https://stage.kopykitab.com/CAT', title: 'CAT', text: 'CAT' },
    // ... add other links similarly
  ];

  return (
    <div className="popular_bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="widget_name popCat_line">Popular categories</h3>
            <div className="pop_cat_holder">
              <ul className="popular_cat">
                <li className={`tab-clr-1 popular_cat_link ${activeTab === "tab-1" ? "current" : ""}`} 
                    onClick={() => setActiveTab("tab-1")} 
                    data-tab="tab-1">
                  <div className="cat_icon top_exam"><div className="cat_top_exam"></div></div>
                  Top Exams
                </li>
                {/* ... repeat for other tabs */}
              </ul>

              {activeTab === "tab-1" && <TabContent id="tab-1" links={topExamLinks} />}
              {/* ... repeat for other tab contents */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
