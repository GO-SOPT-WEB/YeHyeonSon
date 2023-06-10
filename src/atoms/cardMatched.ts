import {atom} from "recoil";

interface Card {
    id: number;
    title: string;
    src: string;
    matched: boolean;
}

export const turnsStateAtom = atom<number>({
    key: "turnsState",
    default: 0,
});

export const choiceOneStateAtom = atom<Card | null>({
    key: "choiceOneState",
    default: null,
});

export const choiceTwoStateAtom = atom< Card | null>({
    key: "choiceTwoState",
    default: null,
});


export const matchedCountStateAtom = atom<number>({
    key: "matchedCountState",
    default: 0,
});

export const cardPairsStateAtom = atom<number>({
    key: "cardPairsState",
    default: 5,
});
