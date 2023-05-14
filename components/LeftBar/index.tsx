import React from 'react'
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import TreeView, { flattenTree } from "react-accessible-treeview";
import styles from '/styles/LeftBar.module.css'
import { FolderGroup } from '../../Constant';

const LeftBar = () => {
    const router = useRouter()
    const data = flattenTree(FolderGroup);

    const FolderIcon = ({ isOpen }: any) =>
        isOpen ? (
            <Icon icon="fa-solid:folder-open" color='lightgray' width="20" height="20" className={styles.icon} />
        ) : (
            <Icon icon="fa-solid:folder" color='lightgray' width="20" height="20" className={styles.icon} />
        );

    const ParentIcon = ({ isOpen }: any) =>
        isOpen ? (
            <Icon icon="bx:chevron-down" color='lightgray' width="24" height="24" className={styles.icon} />
        ) : (
            <Icon icon="bx:chevron-right" color='lightgray' width="24" height="24" className={styles.icon} />
        );

    const FileIcon = ({ filename }: any) => {
        const extension = filename.slice(filename.lastIndexOf(".") + 1);
        switch (extension) {
            case "js":
                return <Icon icon="logos:javascript" color="yellow" width="20" height="20" className={styles.icon} />;
            case "css":
                return <Icon icon="vscode-icons:file-type-css" color="yellow" width="20" height="20" className={styles.icon} />;
            case "json":
                return <Icon icon="mdi:code-json" color="yellow" width="20" height="20" className={styles.icon} />;
            case "npmignore":
                return <Icon icon="logos:npm" color="yellow" width="20" height="20" className={styles.icon} />;
            case "jsx":
                return <Icon icon="logos:react" color="#1779db" width="20" height="20" className={styles.icon} />;
            case "html":
                return <Icon icon="vscode-icons:file-type-html" color="#1779db" width="20" height="20" className={styles.icon} />;
            case "md":
                return <Icon icon="ant-design:info-circle-outlined" color='#1779db' width="20" height="20" className={styles.icon} />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftTab}>
                <div>
                    <div className={`${styles.SelectedTab} ${styles.tab}`}>
                        <Icon icon="fluent:document-copy-20-regular" width="32" height="32" />
                    </div>
                    <div className={`${styles.tab}`}>
                        <Icon icon="ant-design:search-outlined" width="30" height="32" />
                    </div>
                    <div className={`${styles.tab}`}>
                        <Icon icon="codicon:github-alt" width="27" height="27" />
                    </div>
                    <div className={`${styles.tab}`}>
                        <Icon icon="ion:code-slash-outline" width="27" height="27" />
                    </div>
                    <div className={`${styles.tab}`}>
                        <Icon icon="fluent:history-16-regular" width="32" height="32" />
                    </div>
                </div>
                <div>
                    <div className={`${styles.tab}`}>
                        <Icon icon="la:user-circle-solid" width="32" height="32" />
                    </div>
                    <div className={`${styles.tab}`}>
                        <Icon icon="uiw:setting-o" width="27" height="27" />
                    </div>
                </div>
            </div>
            <div className={styles.explorerTab}>
                <div className={styles.title}>EXPLORER</div>
                <div className={styles.directory}>
                    <TreeView
                        defaultSelectedIds={[2]}
                        data={data}
                        aria-label="directory tree"
                        onBlur={({ treeState, dispatch }) => {
                            dispatch({
                                type: "DESELECT",
                                id: Array.from(treeState.selectedIds)[0]
                            });
                        }}
                        defaultExpandedIds={[1, 2]}
                        nodeRenderer={({
                            element,
                            isBranch,
                            isExpanded,
                            getNodeProps,
                            level
                        }) => (
                            <>
                                <div className={getNodeProps().className} style={{ paddingLeft: 20 * (level - 1) }} onClick={() => {
                                    getNodeProps().onClick;
                                    element.name === 'index.html' && router.push("/");
                                    !(element.name === 'index.html' || element.name === 'Portfolio' || isBranch) && router.push(element.name.split('.')[0]);
                                }}>
                                    {element.name === 'Portfolio' ? (
                                        <ParentIcon isOpen={isExpanded} />
                                    ) : isBranch ? (
                                        <FolderIcon isOpen={isExpanded} />
                                    ) : (
                                        <FileIcon filename={element.name} />
                                    )}
                                    {element.name}
                                </div>
                                <style jsx>{`
                                    .tree, .tree-node, .tree-node-group {
                                        list-style: none;
                                        margin: 0;
                                        padding: 0;
                                    }
                                    .tree-branch-wrapper, .tree-node__leaf {
                                        outline: none;
                                        outline: none;
                                    }
                                    .tree-node {
                                        cursor: pointer;
                                        display: flex;
                                        align-items: center;
                                        margin: 2px 0;
                                    }
                                    .tree-node:hover {
                                        background: #24292e;
                                    }
                                    .tree .tree-node--focused {
                                        background: #24292e;
                                    }
                                    .tree-node__branch {
                                        display: block;
                                    }
                                `}
                                </style>
                            </>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default LeftBar