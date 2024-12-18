import React, {useState} from 'react';
import ArrowButton from "../global/ArrowButton.jsx";

const accordionData = [
    {
        title: 'Is any of my personal information stored in the App?',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
        title: 'What formats can I download my transaction history in?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Ab commodi cum dolor, ducimus eum ex explicabo harum incidunt, iste necessitatibus odio officia pariatur placeat quod rerum tempora veniam voluptatum! ' +
            'Aliquid aspernatur culpa debitis delectus et facere facilis laborum odio omnis quasi qui, quo rem sed sunt tenetur ullam unde, ut! ' +
            'Dolore ducimus, eveniet in labore natus provident tempore totam veritatis. ' +
            'labore maxime minima nam odit quaerat sequi similique soluta suscipit ullam ut velit. Hic nemo nostrum quod? Beatae dignissimos ratione repudiandae s' +
            'int temporibus! Cum delectus deserunt dolore doloribus ducimus eaque nam nisi odio optio quasi qui quibusdam, quo quos rerum unde vel vero voluptate?'
    },
    {
        title: 'Can I schedule future transfers?',
        content: 'Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, ' +
            'egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.'
    },
    {
        title: 'When can I use Banking App services?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Adipisci asperiores deleniti hic inventore iusto laboriosam nemo quo reiciendis, soluta vitae. ' +
            'Architecto commodi cum debitis dolorum ducimus error eum expedita laborum molestiae natus nisi officiis optio possimus, ' +
            'qui quis quo ullam. Dolorem incidunt nulla pariatur saepe suscipit. Dolorum maxime quas reiciendis.'
    },
    {
        title: 'Can I create my own password that is easy for me to remember?',
        content: 'Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. ' +
            'Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.'
    },
    {
        title: 'What happens if I forget or lose my password?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Ad, atque cum distinctio eligendi fuga hic illum laborum modi,' +
            'nesciunt nulla obcaecati perferendis perspiciatis quasi tenetur voluptatem? ' +
            'Cum distinctio error non quam quia quo reiciendis rem, vero vitae voluptate. Doloremque, ' +
            'ex illum magni recusandae reiciendis saepe tempore. Alias aspernatur corporis dicta facere id ' +
            'labore libero, magnam magni minima obcaecati odio odit pariatur placeat possimus quasi quibusdam reiciendis rem sit suscipit voluptates.'
    },
];

const Accordion = () => {

    const [accordionStates, setAccordionStates] = useState([]);
    const toggleAccordion = (index) => {
        setAccordionStates(prevStates => {
            const updatedStates = [...prevStates];
            updatedStates[index] = !updatedStates[index];
            return updatedStates;
        });
    };

    return (
        <div id="accordion">
            {accordionData.map((item, index) => (
                <div className="accordion" key={index}>
                    <div className="accordion-item">
                        <div className={`accordion-title ${accordionStates[index] ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}>
                            <h6>{item.title}</h6>
                            <div>
                                {accordionStates[index] ?
                                    <ArrowButton direction="up" isActive={true} /> :
                                    <ArrowButton direction="down" isActive={false} />
                                }
                            </div>
                        </div>
                        {accordionStates[index] && <div className="accordion-content">
                            {item.content}</div>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
