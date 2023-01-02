import { useState } from "react";
import ReactPaginate from "react-paginate";
import decorationImg from './Decoration.svg';

const fundations = [{ name: "Fundacja “Dbam o Zdrowie”", details: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", type: "ubrania, jedzenie, sprzęt AGD, meble, zabawki" }, { name: "Fundacja “Dla dzieci”", details: "Cel i misja: Pomoc dzieciom z ubogich rodzin.", type: "ubrania, meble, zabawki" }, { name: "Fundacja “Bez domu”", details: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", type: "ubrania, jedzenie, ciepłe koce" }, { name: "Fundacja “Pomoc dla zwierząt“", details: "Cel i misja: Pomoc bezdomnym zwierzętom", type: "jedzenie, poszukiwanie domu" }, { name: "Fundacja “Samotny opiekun”", details: "Cel i misja: Pomoc opiekunom wychowującym samotnie dzieci", type: "ubrania, meble, zabawki" }];

const orgnizations = [{ name: "Organizacja “Lorem Ipsum 1”", details: "Quis varius quam quisque id diam vel quam elementum pulvinar.", type: "Egestas, sed, tempus" }, { name: "Organizacja “Lorem Ipsum 2”", details: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", type: "Ut, aliquam, purus, sit, amet" }, { name: "Organizacja “Lorem Ipsum 3”", details: "Scelerisque in dictum non consectetur a erat nam.", type: "Mi, quis, hendrerit, dolor" }, { name: "Organizacja “Lorem Ipsum 4”", details: "Quis varius quam quisque id diam vel quam elementum pulvinar.", type: "Ut, aliquam, purus, sit, amet" }, { name: "Organizacja “Lorem Ipsum 5”", details: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", type: "Egestas, sed, tempus" }];

const colections = [{ name: "Zbiórka “Lorem Ipsum 1”", details: "Quis varius quam quisque id diam vel quam elementum pulvinar.", type: "Egestas, sed, tempus" }, { name: "Zbiórka “Lorem Ipsum 2”", details: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", type: "Ut, aliquam, purus, sit, amet" }, { name: "Zbiórka “Lorem Ipsum 3”", details: "Scelerisque in dictum non consectetur a erat nam.", type: "Mi, quis, hendrerit, dolor" }];

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
        <section id="whowehelp" className="help">
            <p className="help__title">Komu pomagamy?</p>
            <img src={decorationImg} alt="decoration" />
            <div className="help__btns">
                <button onClick={() => setList(fundations)}>Fundacjom</button>
                <button onClick={() => setList(orgnizations)}>Organizacjom pozarządowym</button>
                <button onClick={() => setList(colections)}>Lokalnym zbiórkom</button>
            </div>
            <p className="help__description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            {displayList}
            <ul>
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </ul>
        </section>
    )
}

export default WhoWeHelp;