import PropTypes from "prop-types";

/**
 * Card component
 * @param {*} children - Body of the card
 * @param {String} cardTitle - Card title
 * @param {String} status - Ignored if null, zindex of the card expressed with tailwindcss classes, ex : z-50
 * @returns
 */
export const Card = ({ children, cardTitle, status }) => {
  return (
    //change md:w-[500px] for a bigger card
    <div className="w-full md:w-[500px] mb-8"> 
      <div className="flex items-center">
        <div className="pb-2 pr-2 text-2xl font-bold tracking-tight text-gray-700">{cardTitle}</div>
        <div
          className={
            status === undefined
              ? "w-2 h-2 rounded-full bg-red-500"
              : status === true
              ? "w-2 h-2 rounded-full bg-green-500"
              : status === false
              ? "w-2 h-2 rounded-full bg-red-500"
              : status === null
              ? "w-0 h-0"
              : "w-2 h-2 rounded-full bg-red-500"
          }
        ></div>
      </div>

      <div className="w-full bg-white rounded-xl border-gray-200 shadow-lg">
        <div className="block p-4 rounded-lg">{children}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  cardTitle: PropTypes.string,
  status: PropTypes.bool,
};
