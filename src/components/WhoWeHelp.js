import { useState } from "react";
import ReactPaginate from "react-paginate";

const fundation1 = [{ name: "Fundacja “Dbam o Zdrowie”" }, { details: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.”" }, { type: "ubrania, jedzenie, sprzęt AGD, meble, zabawki" }];
const fundation2 = [{ name: "Fundacja “Dbam o Zdrowie”" }, { details: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.”" }, { type: "ubrania, jedzenie, sprzęt AGD, meble, zabawki" }];


const fundations = fundation1;
const orgnizations = [{ name: "Organizacja “Lorem Ipsum 1”" }, { details: "Quis varius quam quisque id diam vel quam elementum pulvinar." }, { type: "Egestas, sed, tempus" }];
const colections = [{ name: "Zbiórka “Lorem Ipsum 1”" }, { details: "Quis varius quam quisque id diam vel quam elementum pulvinar." }, { type: "Egestas, sed, tempus" }];

const WhoWeHelp = () => {
    const [list, setList] = useState(fundations);
    const [current, setCurrent] = useState(0);

    const listPerPage = 3;
    const listVisited = current * listPerPage;

    const displayList = list
        .slice(listVisited, listVisited + listPerPage)
        .map((lists) => {
            return (
                <div className="lists">
                    <div className="lists__left">
                        <p>{lists.name}</p>
                        <p>{lists.details}</p>
                    </div>
                    <p>{lists.type}</p>
                </div>
            );
        });

    const pageCount = Math.ceil(list.length / listPerPage);

    const changePage = ({ selected }) => {
        setCurrent(selected);
    };

    return (
        <div className="help">
            <p className="foursteps">Komu pomagamy?</p>
            <center>
                <div className="header__decoration" />
            </center>
            <div className="help__btns">
                <button onClick={() => setList(fundations)}>Fundacjom</button>
                <button onClick={() => setList(orgnizations)}>Organizacjom pozarządowym</button>
                <button onClick={() => setList(colections)}>Lokalnym zbiórkom</button>
            </div>
            {displayList}
            <ul>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </ul>
        </div>
    )
}

export default WhoWeHelp;