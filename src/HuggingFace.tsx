import React from 'react';
import { Link } from './components/ui/link.tsx';

const links = {
    huggingface: 'https://huggingface.co/BinghamtonUniversity',
    model: 'https://huggingface.co/BinghamtonUniversity/cs415-llama2-7b-twitch-chats-40k',
    dataset: 'https://huggingface.co/datasets/BinghamtonUniversity/cs415-twitch-chats-llama2-51k',
};

const HuggingFace = ({ isMobile }: {
    isMobile: boolean;
}) => {
  return (
    <span className={`text-white px-[5vw] m-0 ${isMobile ? '' : 'w-[80vw]'}`}>Currently maintaining the unofficial&nbsp;
        <Link href={links.huggingface}>Binghamton University Huggingface group.</Link>
        &nbsp;Here, I've published this&nbsp;
        <Link href={links.model}>finetuned model</Link>
        &nbsp;alongside&nbsp;
        <Link href={links.dataset}>it's dataset,</Link>
        &nbsp;which I curated with the help of two classmates in CS415.
    </span>
  );
};

export default HuggingFace;