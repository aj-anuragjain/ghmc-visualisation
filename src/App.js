import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';


import {
  BudgetSummaryHref,
  CapitalExpeditureHref,
  CapitalReceiptHref,
  RevenueExpenditureHref,
  RevenueReceiptHref

} from './constants'


const BudgetSummary = lazy(() => import('./components/budgetSummary'))
const CapitalExpediture = lazy(() => import('./components/capitalExpediture'))
const CapitalReceipt = lazy(() => import('./components/capitalReceipt'))
const RevenueExpenditure = lazy(() => import('./components/revenueExpenditure'))
const RevenueReceipt = lazy(() => import('./components/revenueReceipt'))


const BudgetSummaryLazy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <BudgetSummary />
  </Suspense>
);

const CapitalExpeditureLazy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <CapitalExpediture />
  </Suspense>
);

const CapitalReceiptLazy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <CapitalReceipt />
  </Suspense>
);

const RevenueExpenditureLazy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <RevenueExpenditure />
  </Suspense>
);

const RevenueReceiptLazy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <RevenueReceipt />
  </Suspense>
);


function App() {
  return (
    <Router>
      <div>
        <RoutePathList />
        <Switch>
          <Route exact={true} path={BudgetSummaryHref} component={BudgetSummaryLazy} />
          <Route exact={true} path={CapitalExpeditureHref} component={CapitalExpeditureLazy} />
          <Route exact={true} path={CapitalReceiptHref} component={CapitalReceiptLazy} />
          <Route exact={true} path={RevenueExpenditureHref} component={RevenueExpenditureLazy} />
          <Route exact={true} path={RevenueReceiptHref} component={RevenueReceiptLazy} />
        </Switch>
        <RoutePathList />
      </div>
    </Router>
  );
}


function RoutePathList(){
  return (
    <ul className='browser-default'>
      <li><Link to={BudgetSummaryHref}>Budget Summary</Link></li>
      <li><Link to={CapitalExpeditureHref}>Capital Expediture</Link></li>
      <li><Link to={CapitalReceiptHref}>Capital Receipt</Link></li>
      <li><Link to={RevenueExpenditureHref}>Revenue Expenditure</Link></li>
      <li><Link to={RevenueReceiptHref}>Revenue Receipt</Link></li>
    </ul>
  );
}

export default App;
