import { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './RefilTankForm.css'
import { useSelector, useDispatch } from 'react-redux'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { sendUpdatedTanksData } from '../store/addNewTank-http-action'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';


const wineColor = ['წითელი', 'ქარვისფერი', 'თეთრი', 'ვარდისფერი', 'კახური ტრადიციული', 'ტკბილი', 'ცქრიალა', 'შემაგრებული', 'ორგანული', 'აისვაინი']

const steps = ['აირჩიე ჭურჭელი', 'ღვინის კომპოზიცია', 'გადაამოწმე'];

const RefilTankStepper = () => {
    const dispatch = useDispatch()
    const tanksData = useSelector(state => state.tanks.tanks)
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [refilFormValue, setRefilFormValue] = useState({
      url: '',
      capacity:'',
      tankType:'',
      tankCode: '',
      wineColor: '',
      description: '',
      refilDate: new Date(),
      howManyWineType: '',
      wineType:'',
      firstWyneComposition:'',
      seccondWyneType:'',
      seccondWyneComposition:'',
      thirdWineType:'',
      thirdWineComposition:'',
    })

const optionChangeHandler = (event) => {
  let eventId = event.target.id.split( '-')[0];
  const value = event.target.textContent;
  setRefilFormValue({
    ...refilFormValue,
    [eventId]: value,
  })
}

const itemChoseHandler = (event) => {
const value = event.target.textContent;
const choosedTank = tanksData?.find((item) =>  item?.tankCode ===  value);
console.log(choosedTank)
setRefilFormValue({...refilFormValue,
     url:choosedTank.id,
    tankCode:choosedTank.tankCode,
    capacity:choosedTank.capacity,
      tankType:choosedTank.tankType,
    })
}




    const changeHandler = (event) => {
      const value = event.target.value;
      setRefilFormValue({
        ...refilFormValue,
        [event.target.id]: value,
      })
    }

    const isStepOptional = (step) => {
      return step === 1;
    };

    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
    
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };

    const handleReset = () => {
      setActiveStep(0);
    };
    const handleSubmit = () => {
      dispatch(sendUpdatedTanksData(refilFormValue))

    }

    
    const compositionStyle = {
      width: '100%',
      marginBottom: '30px',
      display: 'flex',
      justifyContent: 'space-around'

    }

    const compositionInputsStyle = {

      marginLeft: '30px',
      width: '150px'

    }

    const inputStyles = {
      marginBottom: " 30px ",
      marginLeft: '30px',
      width: '360px'
    }
    const inputBoxStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space around'

    }

    
    
    return (
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption"></Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? handleSubmit() : (
          <>
       

            <form className='refil-form' >
              {activeStep === 0 && (
                <>
                  <Box >
                    <Autocomplete
                      disablePortal
                      id="tankCode"
                      options={tanksData.map((el) => { return (el.tankCode) })}
                      onChange={itemChoseHandler}
                      renderInput={(params) => <TextField {...params} label="ჩემი ჭურჭლები"
                      value={refilFormValue.tankCode}
                      />}
                    />

                    <DatePicker
                      id='refilDate'
                      label='date'
                      selected={refilFormValue.refilDate}
                      onChange={(date) => setRefilFormValue({ ...refilFormValue, refilDate: date })}
                      minDate={new Date()}
                      showDisabledMonthNavigation
                      wrapperClassName="datePicker"

                    />
                  </Box>

                  <Box sx={inputBoxStyle}>
                    <Autocomplete
                      disablePortal
                      id="wineColor"
                      options={wineColor}
                      onChange={optionChangeHandler}
                      sx={inputStyles}
                      renderInput={(params) => <TextField {...params} label="ღვინის ტიპი"
                        value={refilFormValue.wineColor}
                      />}
                    />

                    <TextField
                      rows={4}
                      multiline sx={inputStyles}
                      labelId="tankCodeLabel"
                      label='დახასიათება'
                      id='description'
                      onChange={changeHandler}
                      placeholder='დახასიათება'
                      value={refilFormValue.description}
                    />
                  </Box>
                </>
              )}

              {activeStep === 1 && (
                <>

                  <Box>
                    <Autocomplete
                      sx={{ width: 350 }}
                      disablePortal
                      id="howManyWineType"
                      options={[1, 2, 3,]}
                      onChange={optionChangeHandler}
                      renderInput={(params) => <TextField {...params} label="რამდენი ჯიშისგან შედგება ღვინო?" />}
                      value={refilFormValue.howManyWineType}
                    />
                  </Box>

                  <Box sx={inputBoxStyle}>
                    {(refilFormValue.howManyWineType === '1' || refilFormValue.howManyWineType === '2' || refilFormValue.howManyWineType === '3') && (<Box sx={compositionStyle}>
                      <Autocomplete
                        sx={compositionInputsStyle}
                        disablePortal
                        id="wineType"
                        options={['ოჯალეში', 'ცოლიკაური', 'ციცქა', 'ქინძმარაული', 'რქაწითელი', 'საფერავი']}
                        onChange={optionChangeHandler}
                        renderInput={(params) => <TextField {...params} label="რა ჯიში?" />}
                        value={refilFormValue.wineType}
                      />

                     { (refilFormValue.howManyWineType === '2' || refilFormValue.howManyWineType === '3') && ( <Autocomplete
                        sx={compositionInputsStyle}
                        disablePortal
                        id="firstWyneComposition"
                        options={[20 + '%', 30 + '%', 40 + '%',50 + '%', 60 + '%', 70 + '%',80 + '%', 90 + '%'] }
                        onChange={optionChangeHandler}
                        renderInput={(params) => <TextField {...params} label="რამდენი პროცენტი?" />}
                        value={refilFormValue.firstWyneComposition}
                      />)}
                    </Box>)}

                    {(refilFormValue.howManyWineType === '2' || refilFormValue.howManyWineType === '3') && (<Box>
                      <Box sx={compositionStyle}>
                        <Autocomplete
                          sx={compositionInputsStyle}
                          disablePortal
                          id="seccondWyneType"
                          options={['ოჯალეში', 'ცოლიკაური', 'ციცქა', 'ქინძმარაული', 'რქაწითელი', 'საფერავი']}
                          onChange={optionChangeHandler}
                          renderInput={(params) => <TextField {...params} label="რა ჯიში?" />}
                          value={refilFormValue.seccondWyneType}
                        />

                        <Autocomplete
                          sx={compositionInputsStyle}
                          disablePortal
                          id="seccondWyneComposition"
                          options={[20 + '%', 30 + '%', 40 + '%',50 + '%', 60 + '%', 70 + '%',80 + '%', 90 + '%']}
                          onChange={optionChangeHandler}
                          renderInput={(params) => <TextField {...params} label="რამდენი პროცენტი?" />}
                          value={refilFormValue.seccondWyneComposition}
                        />
                      </Box>
                    </Box>)}

                    {refilFormValue.howManyWineType === '3' && (<Box>
                      <Box sx={compositionStyle}>
                        <Autocomplete
                          sx={compositionInputsStyle}
                          disablePortal
                          id="thirdWineType"
                          options={['ოჯალეში', 'ცოლიკაური', 'ციცქა', 'ქინძმარაული', 'რქაწითელი', 'საფერავი']}
                          onChange={optionChangeHandler}
                          renderInput={(params) => <TextField {...params} label="რა ჯიში?" />}
                          value={refilFormValue.thirdWineType}
                        />

                        <Autocomplete
                          sx={compositionInputsStyle}
                          disablePortal
                          id="thirdWineComposition"
                          options={[20 + '%', 30 + '%', 40 + '%',50 + '%', 60 + '%', 70 + '%',80 + '%', 90 + '%']}
                          onChange={optionChangeHandler}
                          renderInput={(params) => <TextField {...params} label="რამდენი პროცენტი?" />}
                          value={refilFormValue.thirdWineComposition}
                        />
                      </Box>
                    </Box>)}

                  </Box>

                </>
              )}

              {activeStep === 2 && (
                <>
                  <Box sx={{background:'#F5F1ED', padding:'19px', borderRadius:'10px'}}>

                  {refilFormValue.tankCode && <Typography>{`ჭურჭლის ნომერი: ${refilFormValue.tankCode}.`}</Typography>}
                  {refilFormValue.tankType && <Typography>{`ჭურჭლის ტიპი: ${refilFormValue.tankType}.`}</Typography>}
                   {refilFormValue.capacity && <Typography>{`მოცულობა: ${refilFormValue.capacity} ლიტრი.`}</Typography>}
                  
                   {refilFormValue.description && <Typography>{`დახასიათება: ${refilFormValue.description}.`}</Typography>}
                   
                   {refilFormValue.wineColor && <Typography>{`ყურძნის ტიპი: ${refilFormValue.wineColor}.`}</Typography>}
                   {refilFormValue.howManyWineType && <Typography>{`რამდენი ჯიშისგან შედგება ღვინო?: ${refilFormValue.howManyWineType}.`}</Typography>}


                   {refilFormValue.wineType && <Typography>{`${refilFormValue.seccondWyneType ? 'პირველი ყურძნის ტიპი:' : 'ღვინის ტიპი:' }  ${refilFormValue.wineType} ${refilFormValue.firstWyneComposition && refilFormValue.firstWyneComposition}.`}</Typography>}

                   {refilFormValue.seccondWyneType && <Typography>{`მეორე ყურძნის ტიპი: ${refilFormValue.seccondWyneType} ${refilFormValue.seccondWyneComposition}`}</Typography>}
                
                   {refilFormValue.thirdWineType && <Typography>{`მესამე ყურძნის ტიპი: ${refilFormValue.thirdWineType} ${refilFormValue.thirdWineComposition}`}</Typography>}
                  </Box>

                </>
              )}
            </form>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                უკან
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button disabled={!refilFormValue.tankCode} onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'შენახვა' : 'შემდეგი'
                }
              </Button>
            </Box>
          </>
        )}
      </Box>
    );
  }


  export default RefilTankStepper


