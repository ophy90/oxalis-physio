import * as React from 'react';
import {HeaderTitlePurple, SubtitlePurple, TextPurple, PurpleLightBox, Blocks} from "../components/Styles";
import content from '../../content.json';
import ReactMarkdown from 'react-markdown';

function Physiotherapy() {
    return (
            <PurpleLightBox >
                <Blocks>
                    <HeaderTitlePurple id={'physiotherapy'}>
                        <ReactMarkdown
                            components={{
                                p: ({node, ...props}) => <span {...props} />
                            }}
                        >
                            {content.physiotherapy.firstBlock[0].text}
                        </ReactMarkdown>
                    </HeaderTitlePurple>
                    <TextPurple>
                        <ReactMarkdown
                            components={{
                                p: ({node, ...props}) => <span {...props} />
                            }}
                        >
                            {content.physiotherapy.firstBlock[1].text}
                        </ReactMarkdown>
                    </TextPurple>
                    <TextPurple>
                        <ReactMarkdown
                            components={{
                                p: ({node, ...props}) => <span {...props} />
                            }}
                        >
                            {content.physiotherapy.firstBlock[2].text}
                        </ReactMarkdown>
                    </TextPurple>
                </Blocks>
                <Blocks >
                    <SubtitlePurple>
                        <ReactMarkdown
                            components={{
                                p: ({node, ...props}) => <span {...props} />
                            }}
                        >
                            {content.physiotherapy.secondBlock[0].text}
                        </ReactMarkdown>
                    </SubtitlePurple>
                    <TextPurple>
                        <ReactMarkdown
                            components={{
                                p: ({node, ...props}) => <span {...props} />
                            }}
                        >
                            {content.physiotherapy.secondBlock[1].text}
                        </ReactMarkdown>
                    </TextPurple>
                    <TextPurple>
                        <ReactMarkdown
                            components={{
                                p: ({node, ...props}) => <span {...props} />
                            }}
                        >
                            {content.physiotherapy.secondBlock[2].text}
                        </ReactMarkdown>
                    </TextPurple>
                </Blocks>
                <Blocks>
                    <SubtitlePurple>
                        <ReactMarkdown
                            components={{
                                p: ({node, ...props}) => <span {...props} />
                            }}
                        >
                            {content.physiotherapy.thirdBlock[0].text}
                        </ReactMarkdown>
                    </SubtitlePurple>
                    <TextPurple>
                        <ReactMarkdown
                            components={{
                                p: ({node, ...props}) => <span {...props} />
                            }}
                        >
                            {content.physiotherapy.thirdBlock[1].text}
                        </ReactMarkdown>
                    </TextPurple>
                    <TextPurple>
                        <ReactMarkdown
                            components={{
                                p: ({node, ...props}) => <span {...props} />
                            }}
                        >
                            {content.physiotherapy.thirdBlock[2].text}
                        </ReactMarkdown>
                    </TextPurple>
                </Blocks>
            </PurpleLightBox>
    )
}

export default Physiotherapy;
