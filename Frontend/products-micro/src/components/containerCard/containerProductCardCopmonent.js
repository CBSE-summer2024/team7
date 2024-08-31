import React, { useState } from "react";
import "./containerProductCardCopmonent.css";
import { CardComponent } from "../cardComponent/cardComponent";
import mockData from "../../data/mockData";
import { Pagination } from "react-bootstrap";

export const ContainerProductCardComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;
  const visiblePageCount = 3;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = mockData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(mockData.length / cardsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const startPage = Math.max(1, currentPage - Math.floor(visiblePageCount / 2));
  const endPage = Math.min(totalPages, startPage + visiblePageCount - 1);

  const adjustedStartPage = Math.max(1, endPage - visiblePageCount + 1);

  return (
    <div className="box">
      <div className="items">
        {" "}
        {currentCards.map((product) => (
          <CardComponent key={product.id} product={product} />
        ))}
      </div>

      <div>
        {" "}
        <Pagination className="justify-content-center">
          <Pagination.Prev onClick={handlePrev} disabled={currentPage === 1} />
          {[...Array(endPage - adjustedStartPage + 1).keys()].map(
            (_, index) => {
              const pageNumber = adjustedStartPage + index;
              return (
                <Pagination.Item
                  key={pageNumber}
                  active={currentPage === pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            }
          )}
          <Pagination.Next
            onClick={handleNext}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
};
