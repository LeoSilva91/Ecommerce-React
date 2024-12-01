import React, { ReactNode } from "react";

type Props = {
  children: ReactNode; 
};

const AppContainer: React.FC<Props> = ({children}) => {
    return(
        <div>
            {children}
        </div>
    )
}

export default AppContainer;