import React from 'react';

// tip: metrics are friends, conflicts, days off, time on/off campus, rating
const SortRow = props => (
  <div className="sort-row metric-row">
    <div className="sort-text">
      <input
        type="text"
      />
    </div>
    <div className="sort-order-dropdown">
      <input
        type="text"
      />
    </div>
    <div className="sort-metric-dropdown">
      <input
        type="text"
      />
    </div>
    <div
      className="sort-close"
      onClick={() => props.removeMetric(props.chosenMetric.metric)}
    >
      <i className="fa fa-times" />
    </div>
  </div>
);

const FooterRow = ({ addNextMetric }) => (
  <div
    className="sort-row footer-row"
    onClick={addNextMetric}
  >
    <span style={{ margin: 'auto' }}> New Session </span>
  </div>
);

export class IntegrationSlot extends React.Component {
  render() {
    const { metrics } = this.props;
    const selectedMetrics = metrics.filter(m => m.selected);
    const availMetrics = metrics.filter(m => !m.selected);
    const rows = selectedMetrics.map((m, i) => (
      <SortRow
        {...this.props}
        actionText="then by"
        chosenMetric={m}
        availMetrics={availMetrics}
        key={i}
      />
        ));
    const footer = availMetrics.length > 0 ?
      <FooterRow addNextMetric={() => this.props.addMetric(availMetrics[0].metric)} />
            : null;

    return (
      <div className="sort-menu">
        {rows}
        {footer}
      </div>
    );
  }
}
