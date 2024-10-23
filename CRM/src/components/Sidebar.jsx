import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome icons

const Sidebar = () => {
  return (
    <nav className="sidebar" data-trigger="scrollbar">
      <div className="sidebar-header d-none d-lg-block">
        <div className="sidebar-toggle-pin">
          <i className="fas fa-thumbtack"></i> {/* Pinned icon */}
        </div>
      </div>

      <div className="sidebar-body">
        <ul className="nav">
          <li className="nav-category">Main</li>
          <li className="active">
            <a href="index.html">
              <i className="fas fa-chart-pie"></i> {/* Pie Chart */}
              <span className="link-title">Dashboard</span>
            </a>
          </li>

          {/* Ecommerce Section */}
          <li>
            <a href="#">
              <i className="fas fa-shopping-cart"></i> {/* Shopping Cart */}
              <span className="link-title">Ecommerce</span>
            </a>
            <ul className="nav sub-menu">
              <li><a href="pages/ecommerce/ecommerce.html">Dashboard 1</a></li>
              <li><a href="pages/ecommerce/ecommerce2.html">Dashboard 2</a></li>
              <li><a href="pages/ecommerce/orders.html">Orders</a></li>
              <li><a href="pages/ecommerce/product-catelog.html">Product Catalog</a></li>
              <li><a href="pages/ecommerce/product-details.html">Product Details</a></li>
              <li><a href="pages/ecommerce/cartlist.html">Cart List</a></li>
            </ul>
          </li>

          {/* Social Media Section */}
          <li>
            <a href="pages/social-media.html">
              <i className="fas fa-chart-line"></i> {/* Line Chart */}
              <span className="link-title">Social Media Analytics</span>
            </a>
          </li>

          <li className="nav-category">Apps</li>

          {/* Email Section */}
          <li>
            <a href="#">
              <i className="fas fa-envelope"></i> {/* Envelope */}
              <span className="link-title">Email</span>
            </a>
            <ul className="nav sub-menu">
              <li><a href="pages/apps/email/inbox.html">Inbox</a></li>
              <li><a href="pages/apps/email/read.html">Read</a></li>
              <li><a href="pages/apps/email/compose.html">Compose</a></li>
            </ul>
          </li>

          {/* Chat Section */}
          <li>
            <a href="pages/apps/chat.html">
              <i className="fas fa-comments"></i> {/* Comments Icon */}
              <span className="link-title">Chat</span>
            </a>
          </li>

          {/* To Do List Section */}
          <li>
            <a href="#">
              <i className="fas fa-list"></i> {/* List Icon */}
              <span className="link-title">To Do List</span>
            </a>
            <ul className="nav sub-menu">
              <li><a href="pages/apps/todolist/todolist.html">Tasks</a></li>
              <li><a href="pages/apps/todolist/add-new.html">Add New</a></li>
              <li><a href="pages/apps/todolist/task-details.html">Details</a></li>
            </ul>
          </li>

          {/* Calendar Section */}
          <li>
            <a href="pages/apps/calendar.html">
              <i className="fas fa-calendar-alt"></i> {/* Calendar Icon */}
              <span className="link-title">Calendar</span>
            </a>
          </li>

          {/* Invoice Section */}
          <li>
            <a href="#">
              <i className="fas fa-file-invoice"></i> {/* Invoice Icon */}
              <span className="link-title">Invoice</span>
            </a>
            <ul className="nav sub-menu">
              <li><a href="pages/apps/invoice/invoice-list.html">Invoice List</a></li>
              <li><a href="pages/apps/invoice/invoice-details.html">Details</a></li>
              <li><a href="pages/apps/invoice/invoice-add-new.html">Add New</a></li>
            </ul>
          </li>

          {/* Contact Section */}
          <li>
            <a href="#">
              <i className="fas fa-address-book"></i> {/* Contact Icon */}
              <span className="link-title">Contact</span>
            </a>
            <ul className="nav sub-menu">
              <li><a href="pages/apps/contact/contact-list.html">List View</a></li>
              <li><a href="pages/apps/contact/contact-grid.html">Grid View</a></li>
            </ul>
          </li>

          {/* Project Manager Section */}
          <li>
            <a href="#">
              <i className="fas fa-tasks"></i> {/* Tasks Icon */}
              <span className="link-title">Project Manager</span>
            </a>
            <ul className="nav sub-menu">
              <li><a href="pages/apps/project-manager/project.html">Project Status</a></li>
              <li><a href="pages/apps/project-manager/task-list.html">Task List</a></li>
              <li><a href="pages/apps/project-manager/create-new.html">Create New Board</a></li>
            </ul>
          </li>

          {/* File Manager Section */}
          <li>
            <a href="#">
              <i className="fas fa-folder"></i> {/* Folder Icon */}
              <span className="link-title">File Manager</span>
            </a>
            <ul className="nav sub-menu">
              <li><a href="pages/apps/file-manager/file-info.html">File Info</a></li>
              <li><a href="pages/apps/file-manager/share.html">Share</a></li>
              <li><a href="pages/apps/file-manager/upload.html">Upload New File</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
