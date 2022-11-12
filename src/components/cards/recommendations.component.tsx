import React, { FC } from 'react';
import { DateTime } from 'luxon';


const Recommendations: FC<{ umbrella?: string; jacket?: string }> = ({ umbrella, jacket }) => {
  const getRecommendationInfo = (name: string, dateKey: string) => {
    const d = DateTime.fromFormat(dateKey, 'yyyyMMdd');
    const dateString = `${d.weekdayLong}, ${d.monthShort} ${d.day}`;

    return <p>{`${name}`} could start selling at <strong>{dateString}</strong>.</p>;
  };


  return (
    <div id="recommendations">
      <h3>Recommendations:</h3>

      {umbrella && (
        <div className="umbrella">
          <div className="icon umbrella"></div>
          {getRecommendationInfo('Umbrella', umbrella)}
        </div>
      )}

      {jacket &&(
        <div className="jacket">
          <div className="icon jacket"></div>
          {getRecommendationInfo('Jacket', jacket)}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
