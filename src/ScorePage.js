import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function ScorePage(props) {

	return (
		<Grid
			container
			direction="row"
			justifyContent="center">

			<Grid
				container
				spacing="3"
				direction="column"
				justifyContent="flex-start"
				alignItems="stretch"
				item xs={6}>

				<Grid item>
                <>
                    <Typography variant="subtitle1" gutterBottom>
                        Таки все
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        Результаты
                    </Typography>
                 </>
				</Grid>	
                <Grid item>
                    Вы набрали {props.score} из {props.maximux}
                </Grid>
                <Grid item>
                <>
                    <Typography variant="body" gutterBottom>
                    От 25 баллов и выше
                    Элита. Можно смело устраиваться. Если не наврали, работать будет комфортно.

                    18–24 баллов
                    Очень хорошая команда. Стоит рассматривать, даже если предлагают чуть ниже рынка.
                    
                    13–17 баллов
                    Хорошая команда. Комфортные условия, возможность чему-то научиться и привнести своего.
    
                    7–12 баллов
                    Важно понять, входят ли проблемы в вашу зону ответственности. Если не входят, просить выше среднего по рынку. Если вы сможете повлиять на проблемы и понравился коллектив, можно пробовать.

                    Ниже 7 баллов
                    Бежать.
                    Если компания небольшая и вы уверены в своих силах реформатора, можно попробовать.

                    </Typography>
                 </>
				</Grid>	

                <Grid item>
					<Button variant="outlined" color="primary" href="https://howto.stringconcat.com/">Курс</Button>
				</Grid>

			</Grid>
		</Grid>
	);
}
