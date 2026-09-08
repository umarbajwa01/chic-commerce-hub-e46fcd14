# Chic Commerce Hub

I want you to build a complete, modern, premium, production-quality fashion e-commerce platform inspired by the reference images I have provided.

IMPORTANT:

The reference images are visual design inspiration only.

Do not copy any copyrighted logos, branding, text, or product images exactly.

Create an original brand identity, original content, and original placeholder assets while maintaining a similar premium visual quality, layout structure, spacing, hierarchy, and user experience.

This must NOT be treated as a simple frontend website.

I want a complete e-commerce platform consisting of:

1. Public E-commerce Website

2. Customer Authentication System

3. Customer Dashboard

4. Admin / Website Owner Dashboard

5. Backend Architecture

6. Database Architecture

7. Role-Based Access Control

8. Product Management System

9. Inventory Management System

10. Order Management System

11. Customer Order Tracking System

12. Cart and Wishlist System

13. Checkout System

14. Payment Architecture

15. Notifications System

16. Responsive Mobile and Desktop Experience

==================================================

PROJECT GOAL

==================================================

Build a professional fashion e-commerce platform that can realistically be used by a business owner to manage products, inventory, customers, orders, and website content.

Customers must be able to browse and purchase products.

The website owner/admin must be able to manage the entire business through a secure Admin Dashboard.

The system must be structured professionally and be scalable.

==================================================

USER ROLES

==================================================

Implement role-based access control.

Required roles:

1. CUSTOMER

2. ADMIN / WEBSITE OWNER

Design the architecture so additional roles can easily be added later, such as:

- SUPER ADMIN

- MANAGER

- CUSTOMER SUPPORT

- CONTENT MANAGER

Each role must only access the sections and features they are authorized to access.

Customers must never access the Admin Dashboard.

Admin routes must be protected.

==================================================

SYSTEM ARCHITECTURE

==================================================

The platform should have the following structure:

PUBLIC WEBSITE

        |

        v

CUSTOMER AUTHENTICATION

        |

        v

CUSTOMER DASHBOARD

        |

        v

BACKEND / API

        |

        v

DATABASE

AND:

ADMIN / OWNER DASHBOARD

        |

        v

BACKEND / API

        |

        v

DATABASE

The Admin Dashboard and Customer Dashboard should use the same backend and database but have separate interfaces and protected access.

==================================================

DESIGN STYLE

==================================================

Create a premium modern fashion e-commerce design inspired by the reference images.

Design characteristics:

- Premium fashion brand aesthetic

- Clean and minimal interface

- Professional visual hierarchy

- White and cream backgrounds

- Deep dark green accent colors

- Elegant typography

- Generous but balanced spacing

- High-quality product presentation

- Soft shadows

- Refined rounded corners where appropriate

- Professional buttons and form controls

- Modern cards

- Smooth and subtle animations

- Consistent spacing system

- Fully responsive design

- Mobile-first optimization where appropriate

Do not create a generic AI-looking website.

The final design should feel like a professionally designed real fashion e-commerce brand.

==================================================

PUBLIC E-COMMERCE WEBSITE

==================================================

Create the following pages:

1. HOME PAGE

Include:

- Announcement bar

- Responsive navigation

- Brand logo

- Search

- User account

- Wishlist

- Shopping cart

- Mobile navigation

- Hero section

- Call-to-action buttons

- Shop by category

- Promotional banners

- Featured products

- Best-selling products

- Product cards

- Promotional sections

- Newsletter

- Footer

--------------------------------------------------

2. CATEGORIES PAGE

Include:

- Category hero/header

- Category cards

- Category navigation

- Responsive layouts

--------------------------------------------------

3. SHOP / PRODUCT LISTING PAGE

Include:

- Product grid

- Product cards

- Search

- Category filtering

- Price filtering

- Size filtering

- Color filtering

- Product sorting

- Pagination or load more

- Mobile filter experience

- Wishlist buttons

- Product availability

--------------------------------------------------

4. SEARCH RESULTS PAGE

Include:

- Search input

- Search results

- Filters

- Sorting

- Empty search results state

- Responsive product grid

--------------------------------------------------

5. PRODUCT DETAILS PAGE

Include:

- Product image gallery

- Image thumbnails

- Product title

- Product price

- Discount information

- Product ratings

- Product reviews

- Product description

- Size selector

- Color selector

- Quantity selector

- Stock availability

- Add to cart

- Add to wishlist

- Product specifications

- Product information tabs

- Related products

- Recently viewed products

--------------------------------------------------

6. SHOPPING CART

Include:

- Cart items

- Product image

- Product name

- Product price

- Quantity controls

- Remove item

- Subtotal

- Discounts

- Coupon field

- Shipping information

- Total calculation

- Proceed to checkout

- Empty cart state

--------------------------------------------------

7. CHECKOUT

Include:

- Customer information

- Shipping address

- Address selection

- Delivery methods

- Shipping charges

- Payment method selection

- Order summary

- Coupon support

- Final total

- Place order

- Payment success state

- Payment failure state

- Order confirmation

==================================================

CUSTOMER AUTHENTICATION

==================================================

Create:

- Login

- Registration

- Email verification architecture

- Forgot password

- Reset password

- Secure authentication flow

- Protected customer dashboard routes

- Logout

==================================================

CUSTOMER DASHBOARD

==================================================

Create a complete Customer Dashboard.

The customer must be able to access:

CUSTOMER DASHBOARD

|

|-- Dashboard Overview

|

|-- My Profile

|     |-- Personal Information

|     |-- Edit Profile

|

|-- My Orders

|     |-- All Orders

|     |-- Order Details

|     |-- Order Status

|     |-- Order History

|     |-- Track Order

|

|-- Order Tracking

|     |-- Order Received

|     |-- Order Confirmed

|     |-- Processing

|     |-- Shipped

|     |-- Out for Delivery

|     |-- Delivered

|

|-- My Addresses

|     |-- Add Address

|     |-- Edit Address

|     |-- Delete Address

|

|-- Wishlist

|

|-- Payment Methods

|

|-- Notifications

|

|-- Account Settings

|

|-- Logout

IMPORTANT:

Customers must be able to track the real status of their orders.

The order tracking timeline must update based on the order status managed by the Admin Dashboard.

Example:

ADMIN UPDATES ORDER STATUS

        |

        v

DATABASE IS UPDATED

        |

        v

CUSTOMER DASHBOARD RECEIVES NEW STATUS

        |

        v

CUSTOMER CAN TRACK ORDER PROGRESS

==================================================

ADMIN / WEBSITE OWNER DASHBOARD

==================================================

Create a completely separate and secure Admin Dashboard.

The Admin Dashboard is for the Website Owner / Business Owner.

The Admin must be able to manage the complete e-commerce business.

ADMIN DASHBOARD STRUCTURE:

ADMIN DASHBOARD

|

|-- Dashboard Overview

|

|-- Products

|     |-- All Products

|     |-- Add New Product

|     |-- Edit Product

|     |-- Delete Product

|     |-- Product Images

|     |-- Product Variants

|     |-- Product Sizes

|     |-- Product Colors

|     |-- Product Pricing

|     |-- Product Discounts

|     |-- Product Status

|

|-- Categories

|     |-- All Categories

|     |-- Add Category

|     |-- Edit Category

|     |-- Delete Category

|

|-- Inventory

|     |-- Stock Management

|     |-- Stock Quantity

|     |-- Low Stock Alerts

|     |-- Out of Stock Products

|

|-- Orders

|     |-- All Orders

|     |-- Pending Orders

|     |-- Confirmed Orders

|     |-- Processing Orders

|     |-- Shipped Orders

|     |-- Out for Delivery

|     |-- Delivered Orders

|     |-- Cancelled Orders

|     |-- Order Details

|     |-- Update Order Status

|

|-- Customers

|     |-- All Customers

|     |-- Customer Details

|     |-- Customer Orders

|

|-- Discounts & Coupons

|     |-- Create Coupon

|     |-- Edit Coupon

|     |-- Activate / Deactivate Coupon

|     |-- Discount Campaigns

|

|-- Payments

|     |-- Payment Records

|     |-- Payment Status

|     |-- Refund Management

|

|-- Shipping

|     |-- Shipping Methods

|     |-- Shipping Charges

|     |-- Delivery Settings

|

|-- Reviews

|     |-- Product Reviews

|     |-- Review Management

|

|-- Website Content

|     |-- Homepage Banners

|     |-- Promotional Sections

|     |-- Featured Products

|     |-- Best Selling Products

|

|-- Notifications

|

|-- Analytics

|     |-- Total Sales

|     |-- Revenue

|     |-- Total Orders

|     |-- Total Customers

|     |-- Best Selling Products

|     |-- Sales Analytics

|     |-- Revenue Analytics

|

|-- Settings

|

|-- Admin Logout

==================================================

ADMIN PRODUCT MANAGEMENT

==================================================

The Website Owner/Admin must be able to add products without writing code.

Create a complete "Add New Product" interface.

The Admin should be able to:

- Enter Product Name

- Add Product Description

- Select Category

- Add Product Price

- Add Sale Price

- Add Discount

- Upload Multiple Product Images

- Add Sizes

- Add Colors

- Create Product Variants

- Add SKU

- Add Stock Quantity

- Manage Inventory

- Set Product Status

- Save as Draft

- Publish Product

- Edit Existing Products

- Delete Products

PRODUCT FLOW:

ADMIN

    |

    v

ADMIN DASHBOARD

    |

    v

ADD NEW PRODUCT

    |

    v

SAVE PRODUCT

    |

    v

BACKEND / API

    |

    v

DATABASE

    |

    v

PRODUCT APPEARS ON PUBLIC WEBSITE

==================================================

ORDER MANAGEMENT SYSTEM

==================================================

When a customer places an order:

CUSTOMER

    |

    v

ADD PRODUCTS TO CART

    |

    v

CHECKOUT

    |

    v

PAYMENT METHOD

    |

    v

ORDER CREATED

    |

    v

DATABASE

    |

    v

ADMIN DASHBOARD RECEIVES ORDER

    |

    v

ADMIN PROCESSES ORDER

    |

    v

ADMIN UPDATES ORDER STATUS

    |

    v

CUSTOMER DASHBOARD SHOWS UPDATED STATUS

The Admin must be able to update order statuses.

Required order statuses:

- Pending

- Confirmed

- Processing

- Shipped

- Out for Delivery

- Delivered

- Cancelled

- Refunded

The customer must see the current order status in their dashboard.

==================================================

INVENTORY SYSTEM

==================================================

Implement inventory architecture.

Each product or variant should support:

- Stock Quantity

- SKU

- Variant Inventory

- Low Stock Alerts

- Out of Stock Status

When an order is successfully placed, inventory should be prepared to update according to the product quantities ordered.

==================================================

DATABASE ARCHITECTURE

==================================================

Design the database architecture around the following entities:

- Users

- Roles

- Products

- Product Images

- Categories

- Product Variants

- Inventory

- Carts

- Cart Items

- Wishlists

- Wishlist Items

- Orders

- Order Items

- Payments

- Addresses

- Coupons

- Reviews

- Notifications

- Website Settings

Define proper relationships between entities.

Avoid unnecessary duplicate data.

==================================================

BACKEND REQUIREMENTS

==================================================

Create a clean backend architecture.

The backend should support:

- Authentication

- Authorization

- Role-based access

- Products

- Categories

- Inventory

- Cart

- Wishlist

- Orders

- Order Tracking

- Payments

- Coupons

- Reviews

- Notifications

- Admin Management

Use protected routes where necessary.

Validate all user input.

Implement proper error handling.

Create loading states.

Create empty states.

Prepare the architecture for scalability.

==================================================

PAYMENT ARCHITECTURE

==================================================

Design the payment system so multiple payment methods can be supported.

The payment architecture should support:

- Online payments

- Cash on Delivery

- Payment success

- Payment failure

- Payment status

- Refunds

Do not hardcode payment credentials.

Use environment variables for sensitive configuration.

==================================================

CUSTOMER SUPPORT

==================================================

Create a customer support system including:

- Floating support button

- WhatsApp support shortcut

- Contact support

- Product inquiry

- Order inquiry

- Order tracking shortcut

- Size guide shortcut

==================================================

ADDITIONAL PAGES

==================================================

Create:

- About Us

- Contact Us

- FAQ

- Size Guide

- Order Confirmation

- 404 Page

==================================================

REUSABLE COMPONENTS

==================================================

Create reusable components for:

- Navigation

- Footer

- Buttons

- Inputs

- Selectors

- Product Cards

- Product Grid

- Filters

- Modals

- Alerts

- Toast Notifications

- Tabs

- Accordions

- Badges

- Pagination

- Loading States

- Empty States

- Error States

- Dashboard Sidebar

- Admin Sidebar

- Data Tables

- Forms

Avoid duplicate components and duplicate code.

==================================================

RESPONSIVE DESIGN

==================================================

The entire platform must work properly on:

- Desktop

- Laptop

- Tablet

- Mobile

Test and optimize:

- Navigation

- Dashboards

- Product grids

- Filters

- Forms

- Tables

- Checkout

- Cart

- Product pages

Avoid horizontal scrolling.

Ensure touch-friendly controls on mobile.

==================================================

ACCESSIBILITY

==================================================

Follow basic accessibility best practices.

Include:

- Semantic HTML

- Proper form labels

- Keyboard navigation

- Accessible buttons

- Sufficient contrast

- Focus states

==================================================

SECURITY REQUIREMENTS

==================================================

Implement architecture for:

- Secure authentication

- Password protection

- Protected routes

- Role-based authorization

- Admin route protection

- Input validation

- Environment variables

- Secure handling of sensitive data

==================================================

DEVELOPMENT WORKFLOW

==================================================

DO NOT BUILD EVERYTHING AT ONCE.

Build the platform in clearly separated phases.

After completing each phase:

1. Check functionality

2. Check responsiveness

3. Check mobile design

4. Fix bugs

5. Fix layout problems

6. Improve spacing

7. Improve typography

8. Reuse existing components

9. Avoid unnecessary redesign

10. Maintain visual consistency

==================================================

PHASE 1 — FOUNDATION & HOME PAGE

==================================================

Build:

- Project setup

- Technology stack

- Project architecture

- Design system

- Color system

- Typography

- Global styles

- Navigation

- Footer

- Home Page

==================================================

PHASE 2 — PRODUCT BROWSING

==================================================

Build:

- Categories Page

- Shop / Product Listing

- Product Search

- Search Results

- Filters

- Sorting

==================================================

PHASE 3 — PRODUCT DETAILS

==================================================

Build:

- Product Details Page

- Product Gallery

- Product Variants

- Size Selection

- Color Selection

- Quantity

- Related Products

- Wishlist Interaction

==================================================

PHASE 4 — CART & CHECKOUT

==================================================

Build:

- Cart

- Cart Management

- Coupon Interface

- Checkout

- Order Summary

- Order Confirmation

==================================================

PHASE 5 — CUSTOMER AUTHENTICATION

==================================================

Build:

- Login

- Registration

- Forgot Password

- Reset Password

- Authentication Flow

- Protected Customer Routes

==================================================

PHASE 6 — CUSTOMER DASHBOARD

==================================================

Build:

- Dashboard Overview

- Profile

- Orders

- Order Details

- Order Tracking

- Addresses

- Wishlist

- Notifications

- Settings

==================================================

PHASE 7 — ADMIN / OWNER DASHBOARD

==================================================

Build:

- Admin Authentication

- Admin Dashboard

- Products Management

- Add Product

- Edit Product

- Categories Management

- Inventory Management

- Orders Management

- Update Order Status

- Customer Management

- Coupons

- Discounts

- Payments

- Shipping

- Reviews

- Website Content Management

- Analytics

- Settings

==================================================

PHASE 8 — ADDITIONAL PAGES & SUPPORT

==================================================

Build:

- About Us

- Contact

- FAQ

- Size Guide

- WhatsApp Support

- Customer Support

- Order Confirmation

- 404 Page

==================================================

PHASE 9 — BACKEND INTEGRATION & FINAL POLISH

==================================================

Complete:

- Database integration

- Backend integration

- Authentication integration

- Role-based access

- Admin route protection

- Product CRUD

- Order management

- Inventory integration

- Order tracking integration

- Payment architecture

- Error handling

- Loading states

- Empty states

- Security review

- Responsive testing

- Final production-quality review

==================================================

IMPORTANT EXECUTION RULES

==================================================

Work one phase at a time.

Do not skip phases.

Do not build all phases simultaneously.

Start with PHASE 1 ONLY.

Before starting PHASE 1:

1. Analyze the reference images.

2. Propose the technology stack.

3. Explain the project architecture.

4. List the reusable components.

5. Define the design system.

6. Define the database architecture at a high level.

7. Explain how Customer Dashboard and Admin Dashboard will remain separate and secure.

Then begin building PHASE 1.

Do not proceed to the next phase until the current phase is completed and reviewed.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ad60f133-e70c-4c44-a227-02036c61861c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
