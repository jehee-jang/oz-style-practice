import { css } from "styled-components";

//믹스인 변환
export const flexMixin = (
    direction = 'row',
    justify = 'start',
    align = 'stretch',
    gap = 0,
    wrap = 'nowrap'
) => {
    return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
    flex-wrap: ${wrap};
    `;
}

//import { css } from "styled-components"; css코드를 문자열로 작성해서 가져온걸 알려줘야함
//return에도 css 넣어주기

export const fontMixin = (size = 0, weight = 400) => {
    return css`
    font-size: ${size};
    font-weight: ${weight};
    `
}

//변수 변환
export const tagColor = "#d7fa00";
export const gray = "rgb(160, 160, 160)";