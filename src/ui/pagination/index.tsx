"use client";

import React, { useState } from "react";

interface PaginationProps {
  page?: number;
  totalPages?: number;
  onChange?: (e: number) => void;
}

export function Pagination({ page, totalPages, onChange }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(page!);

  const handleClick = (page: number) => {
    setCurrentPage(page);
    onChange?.(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onChange?.(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < (totalPages || 0)) {
      setCurrentPage(currentPage + 1);
      onChange?.(currentPage + 1);
    }
  };

  return (
    <div className="grid grid-flow-col max-w-max mx-auto items-center gap-5">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md border border-[#A4BCFD] bg-[#F1F3F9] font-semibold transition-all ${
          currentPage === 1 && "opacity-30"
        }`}
      >
        ← Previous
      </button>

      <div className="grid grid-flow-col items-center gap-2">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          // Conditionally render ellipses for pages not adjacent to the current page
          if (
            (totalPages || 0) > 5 &&
            Math.abs(currentPage - page) > 1 &&
            page !== 1 &&
            page !== totalPages
          ) {
            if (page === currentPage - 2 || page === currentPage + 2)
              return <span key={page}>...</span>;
            return null;
          }

          return (
            <button
              key={page}
              onClick={() => handleClick(page)}
              className={`px-3 py-1 rounded border transition-all font-semibold ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "bg-white text-black border-transparent"
              } hover:bg-blue-100`}
            >
              {page < 10 ? `0${page}` : page}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded border border-[#A4BCFD] bg-[#F1F3F9] font-semibold transition-all ${
          currentPage === totalPages && "opacity-30"
        }`}
      >
        Next →
      </button>
    </div>
  );
}
