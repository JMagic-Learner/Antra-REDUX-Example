import logo from './logo.svg';
import './App.css';
import CounterClass from './components/Counter/CounterClass'
import CounterFn from './components/Counter/CounterFn';
import CounterFnNumber from './components/Counter/CounterFnNumber'
import CounterNumber from './components/Counter/CounterNumber';
import BuyStockClass from './components/BuyStock/BuyStockClass'
import { useContext, useState } from 'react';
import BuyStockFn from './components/BuyStock/BuyStockFn';
import BuyStockNumber from './components/BuyStock/BuyStockNumber';
import BuyStockFnNumber from './components/BuyStock/BuyStockFnNumber';
import { CounterContext } from './context/counterContext';
import { StockContext } from './context/stockContext';



const pageInfo = [
  {
    pageName: "Counter",
    pageComponent: CounterClass
  },
  {
    pageName: "CounterFn",
    pageComponent: CounterFn
  },
  {
    pageName: "BuyStockClass",
    pageComponent: BuyStockClass
  },
  {
    pageName: "BuyStockFn",
    pageComponent: BuyStockFn
  }
]

function App() {

  const [currentPage, setCurrentPage] = useState(pageInfo[1])
  const value = useContext(CounterContext);
  const value2 = useContext(StockContext);
  console.log("APP", value, value2)
  const hanldeChangePage = (activePageInfo) => {
    setCurrentPage(activePageInfo)
  }

  // const ConnectedComponent = connect(
  //   mapStatetoProps,
  //   mapDispatch
  // )(MyComponent)
  

  const renderCurrentPage = () => {
    const CurPage = currentPage.pageComponent
    return <CurPage patrick="patrick" />
  }



  return (
    <div className="App" hello="hello">
      <header className="App__header">
        <nav className="App__header__nav">
          {pageInfo.map(page => {
            switch (page.pageName) {
              case "CounterClass":
                return <a onClick={() => hanldeChangePage(page)} >{page.pageName} <CounterNumber />  </a>
              case "CounterFn":
                return <a onClick={() => hanldeChangePage(page)} >{page.pageName} <CounterFnNumber />  </a>
                case "BuyStockClass":
                return <a onClick={() => hanldeChangePage(page)} >{page.pageName} <BuyStockNumber/>  </a>
                case "BuyStockFn":
                  return <a onClick={() => hanldeChangePage(page)} >{page.pageName} <BuyStockFnNumber/>  </a>
              default:
                return <a onClick={() => hanldeChangePage(page)} >{page.pageName} </a>
            }
          })}
        </nav>
      </header>
      {
        renderCurrentPage()
      }
    </div>
  );
}

export default App;
