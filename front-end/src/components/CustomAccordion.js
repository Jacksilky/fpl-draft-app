import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';



const CustomAccordion = (props) => {
    let options = []
    for (let i = 0; i < props.options; i++){
        options.push(
            <div>
                <input type="checkbox" class="form-checkbox" checked />
                <span class="ml-2 text-sm">Option {i}</span>
            </div>
        )
    }

    return (
        <div className="mt-4">
            <Accordion>
                <div class="border-b">
                    <AccordionSummary className="border-b-2">
                        <p className="text-base ">Accordion 1</p> 
                    </AccordionSummary>
                </div>
                <AccordionDetails>
                    <label class="items-center">
                        {options}
                    </label>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default CustomAccordion
