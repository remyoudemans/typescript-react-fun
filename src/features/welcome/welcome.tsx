import * as React from 'react'
import { TopBanner } from './top-banner';
import { TypeHere } from './type-here';

export const Welcome: React.SFC<{}> = () => (
    <div>
        <TopBanner />
        <TypeHere />
    </div>
)