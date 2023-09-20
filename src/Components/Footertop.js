// import React from 'react';

// function FooterLinks() {
//   const categories = [
//     {
//       title: "School",
//       links: [
//         { url: "https://www.kopykitab.com/Class-12", text: "Class 12 Books" },
//         // ... Add all other links similarly
//       ]
//     },
//     {
//       title: "Higher Education",
//       links: [
//         { url: "https://www.kopykitab.com/Engineering", text: "Free Engineering Books" },
//         // ... Add all other links similarly
//       ]
//     },
//     {
//         title: "Higher Education",
//         links: [
//           { url: "https://www.kopykitab.com/Engineering", text: "Free Engineering Books" },
//           // ... Add all other links similarly
//         ]
//       },
//       {
//         title: "Higher Education",
//         links: [
//           { url: "https://www.kopykitab.com/Engineering", text: "Free Engineering Books" },
//           // ... Add all other links similarly
//         ]
//       },
//       {
//         title: "Higher Education",
//         links: [
//           { url: "https://www.kopykitab.com/Engineering", text: "Free Engineering Books" },
//           // ... Add all other links similarly
//         ]
//       },
//     // ... Add all other categories similarly
//   ];

//   return (
//     <div className="container">
//       <div className="row footertop">
//         {categories.map(category => (
//           <ul className="col-xs-6 col-sm-4 col-md-3 col-lg-12 footertop" key={category.title}>
//             <li><span className="footer_top_heading">{category.title}</span></li>
//             {category.links.map(link => (
//               <li key={link.url}><a href={link.url} title={link.text}>{link.text}</a></li>
//             ))}
//           </ul>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FooterLinks;
