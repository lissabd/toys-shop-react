import React , { useState, useEffect} from "react";
import "./styles/Reviews.css";

const Reviews = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;  // сколько всего интервью на странице
    const startIndex = (currentPage - 1) * itemsPerPage;
    const totalPages = 2;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 600);
        };
        // Проверяем при загрузке и при изменении размера окна
        handleResize();
        window.addEventListener("resize", handleResize);
    
        // Очищаем слушатель событий при размонтировании компонента
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    // сами интервью
    const reviews = [
        {
            photo: './images/for-reviews/img1.png',
            name: 'Сэм Кромстейн',
            text: 'Очарована этим магазином! Заказала несколько игрушек для сына, и они превзошли ожидания. Красочные, безопасные материалы и приятные цены. Быстрая доставка, довольна каждой покупкой...',
        },
        {
            photo: './images/for-reviews/img2.png',
            name: 'Кэрри',
            text: 'Прекрасный опыт покупок в этом интернет-магазине. Широкий выбор, подробные описания товаров и отличное качество. Ребенок в восторге от новых игрушек. Спасибо за ваш профессионализм!',
        },
        {
            photo: './images/for-reviews/img3.png',
            name: 'Танмай Шуклс',
            text: 'Позитивные эмоции от покупок в этом магазине! Игрушки высокого качества, привлекательные цены и оперативная доставка. Дети в восторге, и мы тоже. Спасибо за радость, которую вы приносите.',
        },
        {
            photo: './images/for-reviews/img4.jpg',
            name: 'Эмили Спаркл',
            text: 'Эти игрушки волшебные! Мои дети их очень любят. Качество фантастическое, а разнообразие опций позволяет развлекать их часами. Настоятельно рекомендуется',
        },
        {
            photo: './images/for-reviews/img5jpg.jpg',
            name: 'Дэниел Плейвелл',
            text: 'Наш опыт работы с этим магазином был потрясающим. Игрушки не только развлекательные, но и обучающие. Мои дети учатся и веселятся одновременно. Отличный сервис и быстрая доставка',
        },
        {
            photo: './images/for-reviews/img6.jpg',
            name: 'Оливия Джойфул',
            text: 'Я в восторге от покупки! Игрушки очаровательны, а внимание к деталям впечатляет. Сайт удобен для пользователя, что делает процесс покупок приятным. Обязательно буду делать покупки здесь снова',
        },
        
    ];
    const handleNextPage = () => {
        setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
      };
      const handlePrevPage = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
      };

      return (
        <>
          <div className="reviews-container">
            <div className="text">
              <h3>Люди говорят о нас</h3>
              <p>Наши продукты, созданные с заботой о ваших малышах, идеально подходят для любого случая. Проверьте это.</p>
            </div>
            {reviews.slice(startIndex, startIndex + itemsPerPage).map((review, index) => (
              <div key={index} className="review">
                <div className="review-header">
                  <img src={review.photo} alt={review.name} className="review-photo" />
                  <div className="review-info">
                    <h3 className="review-name">{review.name}</h3>
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
            {!isMobile && (
              <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                  Prev
                </button>
                <span>{currentPage}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                  Next
                </button>
              </div>
            )}
          </div>
        </>
      );
}
export default Reviews;
