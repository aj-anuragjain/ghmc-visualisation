import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import BudgetSummary from './components/budgetSummary'
import CapitalExpediture from './components/capitalExpediture'
import CapitalReceipt from './components/capitalReceipt'
import RevenueExpenditure from './components/revenueExpenditure'
import RevenueReceipt from './components/revenueReceipt'


import {
  BudgetSummaryHref,
  CapitalExpeditureHref,
  CapitalReceiptHref,
  RevenueExpenditureHref,
  RevenueReceiptHref

} from './constants'


function App() {
  return (
    <Router>
      <div>
        <RoutePathList />
        <Switch>
          <Route exact={true} path={BudgetSummaryHref} component={BudgetSummary} />
          <Route exact={true} path={CapitalExpeditureHref} component={CapitalExpediture} />
          <Route exact={true} path={CapitalReceiptHref} component={CapitalReceipt} />
          <Route exact={true} path={RevenueExpenditureHref} component={RevenueExpenditure} />
          <Route exact={true} path={RevenueReceiptHref} component={RevenueReceipt} />
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
