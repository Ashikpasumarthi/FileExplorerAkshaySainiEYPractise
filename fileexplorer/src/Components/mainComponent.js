import json from './data.json';
import { useState } from "react";
import styles from './main.module.css';
const List = ({ list }) => {
    return (
        <div className={styles.container}>
            {list.map((node, id) => (
                <div key={node.id}>
                    <span>{node.name}</span>
                    {node.children && (<List list={node.children} />)}
                </div>
            ))}
        </div>
    )
}

const FileExplorer = () => {
    const [data, setData] = useState(json);

    console.log(setData)

    return (
        <>
            <div>File Explorer Component</div>
            <List list={data} />
        </>
    )
}

export default FileExplorer;