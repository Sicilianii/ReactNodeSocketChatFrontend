import './_UserName.scss';

const UserName = ({children}: {children?: string}) => {
    return (
        <span className={'user-name'}>{ children || 'Unknown' }</span>
    );
}

export default UserName;