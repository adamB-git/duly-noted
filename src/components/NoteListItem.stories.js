import react from "react";
import { action } from "@storybook/addon-actions";
import NoteListItem from "./NoteListItem";

export default {
    Title: "NoteListItem",
    Component: NoteListItem
};

//short text
export const ShortText = () => {
    return (<NoteListItem id="id" createdAt={new Date()} text="this is a short note" />);
}

//long text
export const LongText = () => {
    return (<NoteListItem id="id" createdAt={new Date()} text="lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in" />);
}

//markdown text
export const MarkdownText = () => {
    return (<NoteListItem id="id" createdAt={new Date()} text="this is some **markdown** text" />);
}

const sixDaysAgo = Date.now() - (6 * 24 * 60 * 60 * 1000);
const twoWeeksAgo = Date.now() - (14 * 24 * 60 * 60 * 1000);

//created less than 1 week ago
export const LessThanOneWeek = () => {
    const createdAt = new Date(sixDaysAgo);
    return (<NoteListItem id="id" createdAt={createdAt} text="this is a note from this week" />);
}

//created more than 1 week ago
export const MoreThanOneWeek = () => {
    const createdAt = new Date(twoWeeksAgo);
    return (<NoteListItem id="id" createdAt={createdAt} text="this is a note from last week" />);
}

//click action
export const ClickAction = () => {
    return (<NoteListItem
                id="id"
                createdAt={new Date()}
                onClick={action("onClick")}
                text="this is a clickable note"
            />);
}

//empty state
export const EmptyText = () => {
    return (<NoteListItem id="id" createdAt={new Date()} text="" />);
}

//error
export const ErrorInOnClick = () => {
    const onClick = () => {
        throw new Error ("simulated error")
    };

    return (<NoteListItem
                id="id"
                createdAt={new Date()}
                onClick={onClick}
                text="this is a clickable note"
            />);
}

//space only
export const SpaceOnly = () => {
    return (<NoteListItem id="id" createdAt={new Date()} text=" " />);
}
