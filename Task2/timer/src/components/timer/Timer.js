import React, { useState, useEffect } from "react";
import "./timer.css";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className="app">
            <div className="time">{seconds}s</div>
            <Box>
                <Button
                    sx={{ mx: 2 }}
                    style={{
                        width: "100px",
                    }}
                    variant="contained"
                    onClick={toggle}
                    size="large"
                >
                    {isActive ? "Pause" : "Start"}
                </Button>
                {seconds !== 0 ? (
                    <Button
                        sx={{ mx: 2 }}
                        style={{
                            width: "100px",
                        }}
                        variant="contained"
                        color="error"
                        size="large"
                        onClick={reset}
                    >
                        Stop
                    </Button>
                ) : (
                    <Button
                        style={{
                            width: "100px",
                        }}
                        sx={{ mx: 2 }}
                        variant="contained"
                        disabled
                        size="large"
                        onClick={reset}
                    >
                        Stop
                    </Button>
                )}
            </Box>
        </div>
    );
};

export default Timer;
