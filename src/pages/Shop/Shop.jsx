import React, { useContext, useEffect, useState, Suspense, lazy } from "react";
import { AppContext } from "../../context/AppContext"; // Import AppContext for wishlist functionality
import { Icon } from "@iconify/react";
import { ThreeCircles, Grid } from "react-loader-spinner";
// Lazy load components
const ProductCard = lazy(() =>
  import("../../components/ProductCard/ProductCard")
);
const Filters = lazy(() => import("../../components/Filters/Filters"));

const Shop = () => {
  const {
    filteredProducts,
    isFilterSideBarOpen,
    setIsFilterSideBarOpen,
    addToWishlist,
  } = useContext(AppContext); // Use filteredProducts

  // State to manage the number of columns in the grid
  const [gridColumns, setGridColumns] = useState(3); // Default to 3 columns

  // Function to handle column change
  const handleColumnChange = (columns) => {
    setGridColumns(columns);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsFilterSideBarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return (
    <div className=" flex gap-8 px-8 py-28 bg-neutral-100 relative z-50">
      {/* Sidebar Toggle Button for Mobile */}
      <button
        className="md:hidden fixed top-24 left-4 bg-white p-2 rounded-lg shadow-md z-50"
        onClick={() => setIsFilterSideBarOpen(!isFilterSideBarOpen)}
      >
        <Icon
          icon={
            isFilterSideBarOpen
              ? "lets-icons:close-round-light" // Use the correct icon set prefix
              : "lets-icons:filter" // Use the correct icon set prefix
          }
          className="text-4xl text-neutral-700"
        />
      </button>

      {/* Sidebar */}
      <div
        className={`w-10/12 md:w-1/3 lg:w-1/4 fixed left-0 md:block md:sticky md:top-0 h-full transition-transform duration-300 ease-in-out transform ${
          isFilterSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        style={{ zIndex: 40 }}
      >
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 flex items-center md:justify-start justify-center gap-2">
            <Icon icon="clarity:filter-line" />
            Filters
          </h2>
          <Suspense
            fallback={
              <div className="flex justify-center">
                <Grid
                  visible={true}
                  height="50"
                  width="50"
                  color="#171717"
                  ariaLabel="three-circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            }
          >
            <Filters />
          </Suspense>
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-full lg:w-3/4 relative ">
        <div className="flex md:justify-between justify-end items-center mb-6">
          <h1 className="text-4xl hidden font-bold uppercase text-neutral-900 md:flex items-center gap-2">
            <Icon icon="stash:shop" className="h-12 w-12" />
            <span>Shop</span>
          </h1>

          {/* Column Control Buttons */}
          <div className="flex gap-2">
            <Icon
              icon="bi:layout-wtf"
              width="32"
              height="32"
              className="mr-4 mt-2"
            />
            <button
              onClick={() => handleColumnChange(1)}
              className={`p-2 rounded-lg hidden lg:hidden ${
                gridColumns === 1
                  ? "bg-black text-white"
                  : "bg-gray-200 text-neutral-700"
              }`}
            >
              <Icon icon="mynaui:square" width="32" height="32" />
            </button>
            <button
              onClick={() => handleColumnChange(2)}
              className={`p-2 hidden lg:block rounded-lg ${
                gridColumns === 2
                  ? "bg-black text-white"
                  : "bg-gray-200 text-neutral-700"
              }`}
            >
              <Icon icon="hugeicons:layout-2-column" width="32" height="32" />
            </button>
            <button
              onClick={() => handleColumnChange(3)}
              className={`p-2 rounded-lg hidden lg:block ${
                gridColumns === 3
                  ? "bg-black text-white"
                  : "bg-gray-200 text-neutral-700"
              }`}
            >
              <Icon icon="hugeicons:layout-3-column" width="32" height="32" />
            </button>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-neutral-900 text-4xl text-center">
            No products found.
          </p>
        ) : (
          <div
            className={`grid gap-6 relative ${
              gridColumns === 1
                ? "md:grid-cols-1 "
                : gridColumns === 2
                ? "md:grid-cols-2 grid-cols-1  lg:px-16  max-w-3xl mx-auto" // Add max-width and center the grid
                : " md:grid-cols-2 lg:grid-cols-3  grid-cols-1 "
            }`}
          >
            <Suspense
              fallback={
                <div className="flex relative md:absolute left-1/2 top-1/2 -translate-y-1/2 md:mt-10 -translate-x-1/2 justify-center items-center">
                  <Grid
                    visible={true}
                    height="50"
                    width="50"
                    color="#171717"
                    ariaLabel="grid-loading"
                    radius="12.5"
                    wrapperStyle={{}}
                    wrapperClass="grid-wrapper"
                  />
                </div>
              }
            >
              {filteredProducts.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addToWishlist={addToWishlist}
                    className={
                      gridColumns === 2
                        ? "w-full max-w-[300px] mx-auto"
                        : "w-full" // Adjust card width for grid-cols-2
                    }
                  />
                );
              })}
            </Suspense>
          </div>
        )}
      </div>

      {/* Overlay for Mobile */}
      {isFilterSideBarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsFilterSideBarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Shop;
