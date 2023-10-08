import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

/**
 * Returns a Listbox component
 * @param {Array} choices - An array of choices
 * @param {Function} callback - Parent component callback
 * @param {String} [width='w-72'] width - tailwind width, w-72 if undefined
 * @param {String} [dropdownWidth='w-full'] dropdownWidth - tailwind width, w-full if undefined. Use to set a different dropdown width
 * @param {Boolean} reset - Reset the selected choice to index 0 if true
 * @param {Function} resetCallback - Callback for the parent componenent, used to update the state of the reset
 * @returns {React.Element}
 */
export const ChoiceListbox = ({ choices, callback, width, dropdownWidth, reset, resetCallback }) => {
  const [selected, setSelected] = useState(choices[0]);

  const changeHandler = (v) => {
    setSelected(v);
    callback(v);
  };

  useEffect(() => {
    if (reset) {
      setSelected(choices[[0]]);
      resetCallback();
    }
  }, [reset]);

  return (
    <div className={width === undefined ? "w-72" : width}>
      <Listbox value={selected} onChange={changeHandler}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <div className="flex justify-between items-center">
              <span className="block truncate">{selected.description}</span>
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options
              className={
                dropdownWidth === undefined
                  ? "z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  : `z-50 absolute mt-1 max-h-60 ${dropdownWidth} overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`
              }
            >
              {choices.map((choice, choiceIdx) => (
                <Listbox.Option
                  key={choiceIdx}
                  className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-blue-100 text-blue-900" : "text-gray-900"}`}
                  value={choice}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block text-clip ${selected ? "font-medium" : "font-normal"}`}>{choice.description}</span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

ChoiceListbox.propTypes = {
  choices: PropTypes.array,
  callback: PropTypes.func,
  width: PropTypes.string,
  dropdownWidth: PropTypes.string,
  reset: PropTypes.bool,
  resetCallback: PropTypes.func,
};
