import SvgIcon from "@mui/material/SvgIcon"

import pythonIcon from "@/assets/python.svg?react"
import goIcon from "@/assets/go.svg?react"

import fastApiIcon from "@/assets/fastapi.svg?react"
import ginIcon from "@/assets/gin.svg?react"

import pandasIcon from "@/assets/pandas.svg?react"
import numpyIcon from "@/assets/NumPy.svg?react"
import jupiterIcon from "@/assets/Jupyter.svg?react"
import scikitLearnIcon from "@/assets/scikit-learn.svg?react"
import pytorchIcon from "@/assets/PyTorch.svg?react"

import postgresIcon from "@/assets/PostgresSQL.svg?react"
import mongoIcon from "@/assets/MongoDB.svg?react"

import dockerIcon  from "@/assets/docker.svg?react"
import awsIcon from "@/assets/aws.svg?react"
import gitIcon from "@/assets/Git.svg?react"

export default function Skills() {
    return (
        <section>
            <h2>Habilidades</h2>
            <ul>
                <SvgIcon
                    style={{ color: "#000",backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "8px", width: "50px", height: "50px" }}
                    component={pythonIcon}
                    inheritViewBox
                />
                <SvgIcon
                    style={{ color: "#000",backgroundColor:  "#f5f5f5", padding: "5px", borderRadius: "8px", width: "50px", height: "50px" }}
                    component={goIcon}
                    inheritViewBox
                />
            </ul>
            <ul>
                <SvgIcon
                    style={{ color: "#000",backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "8px", width: "50px", height: "50px" }}
                    component={fastApiIcon}
                    inheritViewBox
                />
                <SvgIcon
                    style={{ color: "#000",backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "8px", width: "50px", height: "50px" }}
                    component={ginIcon}
                    inheritViewBox
                />
            </ul>
            <ul>
                <SvgIcon
                    style={{ color: "#000",backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "8px", width: "50px", height: "50px" }}
                    component={pandasIcon}
                    inheritViewBox
                />
                <SvgIcon
                    style={{ color: "#000",backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "8px", width: "50px", height: "50px" }}
                    component={numpyIcon}
                    inheritViewBox
                />
                <SvgIcon
                    style={{ color: "#000",backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "8px", width: "50px", height: "50px" }}
                    component={jupiterIcon}
                    inheritViewBox
                />
                <SvgIcon
                    style={{ color: "#000",backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "8px", width: "50px", height: "50px" }}
                    component={scikitLearnIcon}
                    inheritViewBox
                />
                <SvgIcon
                    style={{ color: "#000",backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "8px", width: "50px", height: "50px" }}
                    component={pytorchIcon}
                    inheritViewBox
                />
            </ul>
            <ul>
                <SvgIcon
                    style={{ color: "#000",backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "8px", width: "50px", height: "50px" }}
                    component={postgresIcon}
                    inheritViewBox
                />
                <SvgIcon
                    style={{ color: "#000",backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "8px", width: "50px", height: "50px" }}
                    component={mongoIcon}
                    inheritViewBox
                />
            </ul>
            <ul>  
                <SvgIcon
                    style={{ color: "#000",backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "8px", width: "50px", height: "50px" }}
                    component={awsIcon}
                    inheritViewBox
                />
                <SvgIcon
                    style={{ color: "#000",backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "8px", width: "50px", height: "50px" }}
                    component={dockerIcon}
                    inheritViewBox
                />
                <SvgIcon
                    style={{ color: "#000",backgroundColor: "#f5f5f5", padding: "5px", borderRadius: "8px", width: "50px", height: "50px" }}
                    component={gitIcon}
                    inheritViewBox
                />
            </ul>
        </section>
    );
}