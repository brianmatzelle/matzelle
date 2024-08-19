import React from "react";
import { Link } from '../components/ui/link.tsx';

export default function Resume({ linkFontSize }) {
  return (
      <div
      style={{
        paddingTop: '.5vh',
        fontSize: linkFontSize,
        fontWeight: '350',
      }}
      >
        <span className="">🧾&nbsp;</span>
        <Link href="https://github.com/brianmatzelle/matzelle/blob/main/src/socials/assets/Brian-Matzelle-resume.pdf">Resume</Link>
        <span className='text-xs text-[#005A43]'>&nbsp;-- outdated</span>
      </div>
  );
}