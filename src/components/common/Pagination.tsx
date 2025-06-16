// components/Pagination.tsx

import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    siblingCount?: number; // 현재 페이지 양옆 몇 개 보여줄지 (기본 1)
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    siblingCount = 1,
}) => {
    const createPageRange = () => {
        const range: (number | string)[] = [];
        const totalPageNumbers = siblingCount * 2 + 5; // 시작, 끝, 현재, 양옆 + ...

        if (totalPages <= totalPageNumbers) {
            for (let i = 1; i <= totalPages; i++) range.push(i);
        } else {
            const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
            const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

            const showLeftDots = leftSiblingIndex > 2;
            const showRightDots = rightSiblingIndex < totalPages - 1;

            if (!showLeftDots && showRightDots) {
                for (let i = 1; i <= 3 + siblingCount * 2; i++) range.push(i);
                range.push("...");
                range.push(totalPages);
            } else if (showLeftDots && !showRightDots) {
                range.push(1);
                range.push("...");
                for (let i = totalPages - (2 + siblingCount * 2); i <= totalPages; i++) range.push(i);
            } else {
                range.push(1);
                range.push("...");
                for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) range.push(i);
                range.push("...");
                range.push(totalPages);
            }
        }

        return range;
    };

    const range = createPageRange();

    return (
        <div className="flex justify-center items-center space-x-2 mt-4">
            <button
                className="px-3 py-1 border rounded hover:bg-gray-100"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                이전
            </button>

            {range.map((page, index) =>
                page === "..." ? (
                    <span key={index} className="px-2">
                        ...
                    </span>
                ) : (
                    <button
                        key={index}
                        className={`px-3 py-1 border rounded hover:bg-gray-100 ${page === currentPage ? "bg-blue-500 text-white" : ""
                            }`}
                        onClick={() => onPageChange(Number(page))}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                className="px-3 py-1 border rounded hover:bg-gray-100"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                다음
            </button>
        </div>
    );
};

export default Pagination;