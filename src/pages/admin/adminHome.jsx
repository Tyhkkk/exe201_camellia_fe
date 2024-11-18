// // import React from 'react';
// import AdminSidebar from '../../components/admin/adminSidebar';
// import AdminHeader from '../../components/admin/adminHeader';

// const AdminHome = () => {
//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar - 30% màn hình */}
//       <div className="w-1/3 md:w-1/4 bg-gray-800 text-white">
//         <AdminSidebar />
//       </div>

//       {/* Nội dung chính - 70% màn hình */}
//       <div className="w-2/3 md:w-3/4 flex flex-col">
//         {/* Header */}
//         <AdminHeader />

//         {/* Nội dung trang */}
//         <div className="p-6 bg-gray-100 flex-grow">
//           <h1 className="text-2xl font-semibold text-gray-700">Dashboard</h1>
//           <p className="mt-4">Nội dung của trang quản trị sẽ được trình chiếu ở đây.</p>
//           {/* Bạn có thể thêm các phần nội dung khác tại đây */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;

const AdminHome = () => {
    return (
      <div>
        <h1 className="text-2xl font-semibold">Welcome to Admin Dashboard</h1>
        <p className="mt-4">This is the admin dashboard content area.</p>
      </div>
    );
  };
  
  export default AdminHome;
  
